// src/pages/Categories.jsx
import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { SquarePen, Trash2, MapPin, Clock, ChevronDown, Check, Loader2 } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import postService from "../services/postService";

const tabs = ["Blog", "Press Release", "Publications", "Upcoming Events"];
const POST_TYPES = {
  BLOG: 'blog',
  PRESS_RELEASE: 'press-release',
  PUBLICATION: 'publication',
  EVENT: 'event'
};

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Helper function to get day and month from date
const getDayAndMonth = (dateString) => {
  if (!dateString) return { day: '', month: '' };
  const date = new Date(dateString);
  return {
    day: date.getDate().toString(),
    month: date.toLocaleString('default', { month: 'short' })
  };
};

// Status dropdown component
function StatusDropdown({ postId, currentStatus, onStatusChange }) {
  const statuses = [
    { value: true, label: 'Published' },
    { value: false, label: 'Draft' },
  ];

  // Convert currentStatus to boolean if it's a string
  const isPublished = currentStatus === 'published' || currentStatus === true;

  return (
    <Menu as="div" className="relative z-50 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4B6E3C]">
          {isPublished ? 'Published' : 'Draft'}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="fixed z-50 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {statuses.map((status) => (
              <Menu.Item key={status.value}>
                {({ active }) => (
                  <button
                    onClick={() => onStatusChange(postId, status.value)}
                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      } group flex w-full items-center px-4 py-2 text-sm`}
                  >
                    {status.label}
                    {isPublished === status.value && (
                      <Check className="ml-2 h-4 w-4 text-[#4B6E3C]" />
                    )}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function Categories() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editTime, setEditTime] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null); // {type: 'event'|'blog', id}
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postsByType, setPostsByType] = useState({
    [POST_TYPES.BLOG]: [],
    [POST_TYPES.PRESS_RELEASE]: [],
    [POST_TYPES.PUBLICATION]: [],
    [POST_TYPES.EVENT]: []
  });

  // Fetch posts from the admin endpoint
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://centre-for-earth-works-26db89bfe5a5.herokuapp.com/api/v1/posts/admin');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();

        // Extract posts from the response data
        const posts = responseData.data || [];

        // Organize posts by type
        const organized = {
          [POST_TYPES.BLOG]: [],
          [POST_TYPES.PRESS_RELEASE]: [],
          [POST_TYPES.PUBLICATION]: [],
          [POST_TYPES.EVENT]: []
        };

        posts.forEach(post => {
          switch (post.type) {
            case 'blog':
              organized[POST_TYPES.BLOG].push({
                ...post,
                image: post.featuredImage,
                date: formatDate(post.createdAt || post.date),
                status: post.published ? 'published' : 'draft',
                author: post.author || 'CFEW Team'
              });
              break;
            case 'press-release':
              organized[POST_TYPES.PRESS_RELEASE].push({
                ...post,
                image: post.featuredImage,
                date: formatDate(post.createdAt || post.date),
                source: post.press || post.source || 'CFEW',
                excerpt: post.excerpt || 'No excerpt available',
                link: post.link || '#'
              });
              break;
            case 'publication':
              organized[POST_TYPES.PUBLICATION].push({
                ...post,
                image: post.featuredImage,
                date: formatDate(post.createdAt || post.date),
                source: post.author || post.source || 'CFEW',
                excerpt: post.excerpt || 'No excerpt available',
                link: post.link || '#'
              });
              break;
            case 'event':
              const { day, month } = getDayAndMonth(post.date || post.eventDate || new Date());
              organized[POST_TYPES.EVENT].push({
                ...post,
                day,
                month,
                time: post.time || '8:00 AM',
                location: post.location || 'Location not specified'
              });
              break;
            default:
              break;
          }
        });

        setPostsByType(organized);
        setError(null);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // populate form when an event is selected
  useEffect(() => {
    if (editingEvent) {
      // Format the date for the date input (YYYY-MM-DD)
      const eventDate = editingEvent.date || editingEvent.eventDate;
      const formattedDate = eventDate ? new Date(eventDate).toISOString().split('T')[0] : '';

      setEditDate(formattedDate);
      setEditTitle(editingEvent.title || "");
      setEditLocation(editingEvent.location || "");
      setEditTime(editingEvent.time || editingEvent.eventTime || "");
    }
  }, [editingEvent]);

  const handleUpdate = async () => {
    try {
      // In a real implementation, you would make an API call to update the event
      // For now, we'll just close the modal
      setEditingEvent(null);

      // Example of how you might update the event:
      // const response = await fetch(`/api/v1/posts/${editingEvent._id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     title: editTitle,
      //     location: editLocation,
      //     eventDate: editDate,
      //     eventTime: editTime
      // })
      // });
      // if (!response.ok) throw new Error('Failed to update event');
      // Refresh posts after update
      // fetchPosts();
    } catch (err) {
      console.error('Error updating event:', err);
      alert('Failed to update event. Please try again.');
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    
    try {
      await postService.deletePost(deleteTarget.id);
      // Refresh the posts after deletion
      fetchPosts();
      setDeleteTarget(null);
    } catch (error) {
      console.error('Error deleting post:', error);
      setDeleteTarget(null);
    }
  };

  const cancelDelete = () => setDeleteTarget(null);
  const handleDelete = async () => {
    if (!deleteTarget) return;
    await confirmDelete();
    setDeleteTarget(null);
  };

  const handleStatusChange = async (postId, newStatus) => {
    try {
      // Use the postService to update the post status
      const response = await postService.updatePostStatus(postId, newStatus);

      // Update the UI with the response
      if (response.success) {
        // Update the post in the state
        const updatedPosts = postsByType[POST_TYPES.BLOG].map(post =>
          post.id === postId ? {
            ...post,
            status: response.data.published ? 'published' : 'draft'
          } : post
        );
        // In a real app, you would update the state with the response from the API
        // setPosts(updatedPosts);

        console.log('Status updated successfully:', response);
      }
    } catch (error) {
      console.error('Error updating post status:', error);
      // Show error message to the user
      const errorMessage = error.response?.data?.message || 'Failed to update post status. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-[#1B2816] text-[32px] font-bold mb-4">Categories</h1>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-6 border-b border-[#E5E7EB]">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-3 -mb-px text-[16px] font-normal transition-colors ${activeTab === t
              ? "text-[#4B6E3C] border-b-2 border-[#4B6E3C]"
              : "text-[#8B909A] hover:text-[#4B6E3C]"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin h-10 w-10 text-[#4B6E3C]" />
        </div>
      ) : error ? (
        <div className="text-red-600 p-4 bg-red-50 rounded-md">
          {error}
        </div>
      ) : activeTab === "Press Release" ? (
        <div className="space-y-10">
          {postsByType[POST_TYPES.PRESS_RELEASE].map((item) => (
            <article key={item._id || item.id} className="grid grid-cols-1 md:grid-cols-3 gap-9">
              <img
                src={item.image || "/previous-initiatives/green-school.png"}
                alt={item.title}
                className="w-full md:w-[543.5px] h-full md:h-[284px] object-cover rounded"
              />
              <div className="w-full md:w-[700px] pr-4">
                <h3 className="text-[#1B2816] text-[20px] md:text-[24px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-[#1B2816] text-[16px] font-normal mb-4">
                  <span className="uppercase tracking-wide">{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-[#1B2816] text-[14px] md:text-[16px] font-normal max-w-[52ch] mb-5">
                  {item.excerpt}
                </p>
                <button className="px-5 py-2 bg-[#4B6E3C26] rounded-full border border-[#4B6E3C] text-[#4B6E3C] hover:bg-[#4B6E3C] hover:text-white transition cursor-pointer">
                  VIEW
                </button>
              </div>
            </article>
          ))}
          {postsByType[POST_TYPES.PRESS_RELEASE].length === 0 && (
            <p className="text-gray-500 text-center py-10">No press releases found.</p>
          )}
        </div>
      ) : activeTab === "Publications" ? (
        <div className="space-y-10">
          {postsByType[POST_TYPES.PUBLICATION].map((item) => (
            <article key={item._id || item.id} className="grid grid-cols-1 md:grid-cols-3 gap-9">
              <img
                src={item.image || "/previous-initiatives/climate-recovery.png"}
                alt={item.title}
                className="w-full md:w-[543.5px] h-full md:h-[284px] object-cover rounded"
              />
              <div className="w-full md:w-[700px] pr-4">
                <h3 className="text-[#1B2816] text-[20px] md:text-[24px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-[#1B2816] text-[16px] font-normal mb-4">
                  <span className="uppercase tracking-wide">{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-[#1B2816] text-[14px] md:text-[16px] font-normal max-w-[52ch] mb-5">
                  {item.excerpt}
                </p>
                <button className="px-5 py-2 bg-[#4B6E3C26] rounded-full border border-[#4B6E3C] text-[#4B6E3C] hover:bg-[#4B6E3C] hover:text-white transition cursor-pointer">
                  VIEW
                </button>
              </div>
            </article>
          ))}
          {postsByType[POST_TYPES.PUBLICATION].length === 0 && (
            <p className="text-gray-500 text-center py-10">No publications found.</p>
          )}
        </div>
      ) : activeTab === "Upcoming Events" ? (
        <div className="space-y-6">
          {postsByType[POST_TYPES.EVENT].map((ev, idx) => (
            <div key={ev.id} className="">
              {/* Row */}
              <div className="flex items-center justify-between gap-4 py-[20px] px-[24px]">
                {/* Date badge */}
                <div className="text-[#27391F] flex items-center gap-6">
                  <div className="w-[100px] h-[100px] rounded-full border-[2px] border-[#BBCCBB] bg-[#4B6E3C] text-white flex flex-col items-center justify-center shadow-inner gap-3">
                    <span className="text-[24px] font-bold leading-none">{ev.day}</span>
                    <span className="text-[16px] font-normal leading-none">{ev.month}</span>
                  </div>
                </div>

                <div className="w-full h-full flex items-center justify-between">
                  <h3 className="text-[20px] md:text-[24px] font-bold">{ev.title}</h3>
                  {/* Time + location */}
                  <div className="flex items-center gap-6 text-[#1B2816] text-[16px] font-normal mb-4">
                    {ev.time && (
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-[#4B6E3C]" />
                        <span className="text-[16px] font-normal">{ev.time}</span>
                      </div>
                    )}
                    {ev.location && (
                      <div className="flex items-center gap-2 max-w-[360px] truncate">
                        <MapPin size={18} className="text-[#4B6E3C]" />
                        <span className="text-[16px] font-normal truncate">{ev.location}</span>
                      </div>
                    )}
                  </div>
                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button title="Edit" className="p-2 rounded hover:bg-[#4B6E3C1A]" onClick={() => setEditingEvent(ev)}>
                      <SquarePen size={20} className="text-[#4B6E3C]" />
                    </button>
                    <button title="Delete" className="p-2 rounded hover:bg-red-50" onClick={() => setDeleteTarget({ type: 'event', id: ev.id, title: ev.title })}>
                      <Trash2 size={20} className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Divider - Only show if not the last event */}
              {idx < postsByType[POST_TYPES.EVENT].length - 1 && <hr className="border-t border-[#BBCCBB]" />}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {postsByType[POST_TYPES.BLOG].map((post) => (
            <article
              key={post.id}
              className="w-[263.75px] h-[428px] bg-[#4B6E3C1A] rounded-[8px] overflow-hidden  shadow-sm"
            >
              <Link to={`/blog/${post.slug || post._id || post.id}`}>
                <img
                  src={post.image || "/previous-initiatives/green-school.png"}
                  alt={post.title}
                  className="w-full h-[200px] object-cover cursor-pointer"
                />
              </Link>

              <div className="flex flex-col p-[24px]">
                <Link to={`/blog/${post.slug || post._id || post.id}`} className="group">
                  <p className="text-[16px] font-normal text-[#1B2816] mb-2 group-hover:underline">
                    {post.date}
                  </p>
                  <h3 className="text-[20px] font-bold text-[#1B2816] leading-snug group-hover:underline line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StatusDropdown
                      postId={post._id || post.id}
                      currentStatus={post.status || 'draft'}
                      onStatusChange={handleStatusChange}
                    />
                    {/* <span className={`text-xs px-2 py-1 rounded-full ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status === 'published' ? 'Live' : 'Draft'}
                    </span> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      title="Edit"
                      className="p-2 rounded hover:bg-[#4B6E3C1A] text-[#1B2816]"
                    >
                      <SquarePen size={20} className="text-[#4B6E3C]" />
                    </button>
                    <button
                      type="button"
                      title="Delete"
                      className="p-2 rounded hover:bg-red-50"
                      onClick={() => confirmDelete({ type: 'blog', id: post._id || post.id })}
                    >
                      <Trash2 size={20} className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      {/* Edit Upcoming Event Modal */}
      {postsByType[POST_TYPES.BLOG].length === 0 && activeTab === "Blog" && !isLoading && !error && (
        <p className="text-gray-500 text-center py-10 col-span-full">No blog posts found.</p>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete "{deleteTarget.title || 'this item'}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Event Modal */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setEditingEvent(null)} />
          <div className="relative bg-white w-full max-w-[600px] rounded-[12px] shadow-lg p-6">
            <h2 className="text-[#1B2816] text-[24px] font-bold mb-6">Edit upcoming event</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Date</label>
                <input
                  type="text"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Event Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Location</label>
                <input
                  type="text"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Time</label>
                <input
                  type="text"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={handleUpdate} className="px-5 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Update</button>
              <button onClick={() => setEditingEvent(null)} className="px-5 py-2 rounded border border-[#C8D6C8] hover:bg-[#F3F6F3]">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={cancelDelete} />
          <div className="relative bg-white w-full max-w-[420px] rounded-[12px] shadow-lg p-6 text-center">
            <p className="text-[#1B2816] text-[16px] font-semibold mb-6">This file will be permanently deleted</p>
            <div className="flex items-center justify-center gap-4">
              <button onClick={handleDelete} className="px-5 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Delete</button>
              <button onClick={cancelDelete} className="px-5 py-2 rounded border border-[#C8D6C8] hover:bg-[#F3F6F3]">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

/**
 * DataStateWrapper - Centralized state management for data fetching
 * 
 * Handles loading, error, empty, and success states in one place.
 * Works with any hook that returns { data, isLoading, isError }
 * 
 * @param {boolean} isLoading - Loading state from hook
 * @param {Error|null} isError - Error object from hook
 * @param {any} data - Data from hook (can be array, object, or null)
 * @param {React.ReactNode|Function} children - Render function or component
 * @param {Object} config - Configuration for different states
 */
function DataStateWrapper({
  isLoading,
  isError,
  data,
  children,
  config = {}
}) {
  const {
    // Loading state config
    loadingComponent,
    loadingFallback,
    
    // Error state config
    errorMessage = "Something went wrong. Please try again later.",
    errorComponent,
    showErrorDetails = false,
    errorBackLink,
    
    // Empty state config
    emptyMessage = "No data available.",
    emptyComponent,
    checkEmpty = (data) => !data || (Array.isArray(data) && data.length === 0),
    
    // Container config
    containerClassName = "text-center py-12",
  } = config;

  // ===== LOADING STATE =====
  if (isLoading) {
    if (loadingComponent) {
      return loadingComponent;
    }
    
    if (loadingFallback) {
      return loadingFallback;
    }

    // Default loading skeleton
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-32 bg-gray-300 rounded"></div>
      </div>
    );
  }

  // ===== ERROR STATE =====
  if (isError) {
    if (errorComponent) {
      return errorComponent;
    }

    return (
      <div className={containerClassName}>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading Content
        </h2>
        <p className="text-gray-600 mb-6">
          {showErrorDetails && isError.message ? isError.message : errorMessage}
        </p>
        {errorBackLink && (
          <Link
            to={errorBackLink.to}
            className="text-cfew-primary-400 hover:underline"
          >
            {errorBackLink.label || "Go Back"}
          </Link>
        )}
      </div>
    );
  }

  // ===== EMPTY STATE =====
  if (checkEmpty(data)) {
    if (emptyComponent) {
      return emptyComponent;
    }

    return (
      <div className={containerClassName}>
        <p className="text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  // ===== SUCCESS STATE =====
  // Support both render props and component children
  if (typeof children === "function") {
    return children(data);
  }

  return children;
}

export default DataStateWrapper;
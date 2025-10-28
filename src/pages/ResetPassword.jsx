
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";

export default function ResetPasswordPage() {
    const navigate = useNavigate();

    const handleEmail = (e) => {
        e.preventDefault();
        // TODO: API integration
        navigate("/admin/new-password");
    };

    return (
        <div className="w-[442px] h-[456px]flex flex-col">
            <h2 className="text-center text-[#4B6E3C] font-bold text-[20px] mb-12">
                Reset Password
            </h2>
            <form onSubmit={handleEmail} className="space-y-10">
                <p className="text-[#A0ACB9] text-center">We’ve sent an email to <span className="text-[#4B6E3C]">marvebcc@gmail.com</span>. Reset password using the link via email.</p>
                <Button type="submit">Verify Email</Button>
            </form>

            <div className="flex items-center justify-center text-center mt-8">
                <p className="text-[16px] font-normal text-[#A0ACB9]">Didn't receive the Email?</p>
                <Link to="/admin/login" className="text-[16px] font-normal text-[#4B6E3C] hover:underline">
                    Resend Link
                </Link>
            </div>
        </div>
    );
}

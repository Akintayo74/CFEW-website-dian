import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleReset = (e) => {
        e.preventDefault();
        // TODO: API integration for password reset
        alert("Password reset link sent!");
        navigate("/admin/reset-password");
    };

    return (
        <div className="w-[442px] h-[456px]flex flex-col">
            <h2 className="text-center text-[#4B6E3C] font-bold text-[20px] mb-12">
                Forgot Password
            </h2>
            <form onSubmit={handleReset} className="space-y-10">
                <InputField
                    label="Email"
                    type="email"
                    placeholder="Type your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit">Reset Password</Button>
            </form>

            <div className="text-center mt-8">
                <Link to="/admin/login" className="text-[#4B6E3C] hover:underline">
                    Back to Login
                </Link>
            </div>
        </div>
    );
}

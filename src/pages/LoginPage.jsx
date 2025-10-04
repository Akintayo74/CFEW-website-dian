import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: API integration
        navigate("/dashboard");
    };

    return (
        <div className="w-[442px] h-[456px]">
            <h2 className="text-center font-bold text-[20px] mb-12">
                Log In to continue
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                <InputField
                    label="Email"
                    type="email"
                    placeholder="Type your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <InputField
                    label="Password"
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    showToggle
                />

                <div className="flex items-center justify-between gap-20">
                    <label className="flex items-center space-x-2">
                        <input className="w-[24px] h-[24px]  border border-[#4B6E3C] rounded accent-[#4B6E3C]" type="checkbox" defaultChecked />
                        <span className="text-[14px] font-normal">Remember me</span>
                    </label>
                    <Link to="/admin/forgot-password" className="text-[14px] font-normal hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}

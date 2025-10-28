import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function NewPasswordPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: API integration
        navigate("/admin/password-reset");
    };

    return (
        <div className="w-[442px] h-[456px] flex flex-col justify-center">
            <h2 className="text-center font-bold text-[20px] mb-12">
                Set new password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-10">
                <InputField
                    label="Password"
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // required
                    showToggle
                />

                <InputField
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    // required
                    showToggle
                />

                <Button type="submit">Continue</Button>
            </form>
        </div>
    );
}


import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";

export default function PasswordResetPage() {
    const navigate = useNavigate();

    const handleEmail = (e) => {
        e.preventDefault();
        // TODO: API integration
        navigate("/admin/login");
    };

    return (
        <div className="w-[442px] h-[456px]flex flex-col">
            <h2 className="text-center text-[#4B6E3C] font-bold text-[20px] mb-12">
                All Done!
            </h2>
            <form onSubmit={handleEmail} className="space-y-10">
                <p className="text-[#A0ACB9] text-center">Congratulations! your password has been successfully reset</p>
                <Button type="submit">Continue</Button>
            </form>
        </div>
    );
}

import UserCard from "@/app/components/user-card";
import Cards from "@/app/components/cards";

export default function Home() {
    return (
        <div className="md:flex md:flex-col">
            <UserCard></UserCard>
            <Cards></Cards>
        </div>
    )
}

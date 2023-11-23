"use client";
import "../../styles/style.scss";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="dashboard_container relative">
        <div>dashboard</div>
        <button
          className="btn_addmanga"
          onClick={() => router.push("/addmanga")}
        >
          Thêm truyện mới
        </button>
        <button className="btn_adduser" onClick={() => router.push("/adduser")}>
          Thêm người dùng
        </button>
      </div>
    </>
  );
}

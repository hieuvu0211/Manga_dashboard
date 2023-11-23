"use client";
import "../../styles/manga.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [manga, setManga] = useState<any>({
    title: "",
    description: "",
    release_date: "",
    upload_at: "",
    cover_image: "",
    author: "",
  });
  const handleOnChange = (e: any) => {
    setManga({
      ...manga,
      [e.target.name]: [e.target.value],
    });
  };
  const handleCreateData = async () => {
    const res = await fetch(`http://localhost:8000/api/manga`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(manga),
    });
    if (res) {
      router.push("/manga");
    }
    // console.log("manga = ", manga);
  };
  return (
    <>
      <div className="addmanga_container">
        <div className="add_page_content flex">
          <div className="mr-7">
            <p>title</p>
            <p>description</p>
            <p className="mt-36">release_date</p>
            <p>upload_at</p>
            <p>cover_image</p>
            <p>author</p>
          </div>
          <div>
            <input type="text" name="title" onChange={handleOnChange} />
            <br />
            <textarea
              rows={5}
              cols={22}
              name="description"
              onChange={handleOnChange}
            />
            <br />
            <br />
            <input
              type="date"
              className="mt-2"
              name="release_date"
              onChange={handleOnChange}
            />
            <br />
            <input type="date" name="upload_at" onChange={handleOnChange} />
            <br />
            <input type="text" name="cover_image" onChange={handleOnChange} />
            <br />
            <input type="text" name="author" onChange={handleOnChange} />
            <br />
            <button onClick={handleCreateData}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

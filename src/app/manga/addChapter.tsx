"use client";

export default function AddChapter(props: any) {
  return (
    <>
      <div className="add_chapter_container">
        <input
          type="file"
          onChange={(even: any) => {
            const file = even.target.files[0];
            console.log(file);
          }}
        />
      </div>
    </>
  );
}

"use client";

export default function AddChapter(props: any) {
  console.log("props = ", props);
  return (
    <>
      <div className="add_chapter_container">
        <div>Thêm chapter cho sách : {props.props.title}</div>
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

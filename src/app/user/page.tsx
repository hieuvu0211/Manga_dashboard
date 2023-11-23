"use client";
import { useRouter } from "next/navigation";
import "../../styles/user.scss";
import { useEffect, useState } from "react";
import EditUser from "./editUser";
export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>();
  const [editData, setEditData] = useState<any>();
  useEffect(() => {
    async function getdata() {
      const res = await fetch(`http://localhost:8000/api/users`).then((res) =>
        res.json()
      );
      setUserData(res);
    }
    getdata();
  }, []);
  return (
    <>
      <div className="user_container">
        <div className="user_table relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  function
                </th>
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.map((item: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.id}
                      </th>
                      <td className="px-6 py-4">{item.username}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.role}</td>
                      <td className="px-6 py-4">
                        <button
                          className="edit"
                          onClick={() => setEditData(item)}
                        >
                          edit
                        </button>
                        <button className="remove">remove</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="detail">
          <EditUser props={editData} />
        </div>
      </div>
    </>
  );
}

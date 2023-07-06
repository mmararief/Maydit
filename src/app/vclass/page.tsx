"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  name: string;
  date: string;
  description: string;
  link: string;
}

const UpcomingTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Add type annotation for tasks

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/vclass/upcoming");
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 flex flex-col hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg font-semibold mb-2">{task.name}</h2>
            <p className="text-gray-500 mb-2">{task.date}</p>
            <p className="text-gray-500 mb-4">{task.description}</p>
            <div className="mt-auto">
              <a
                href={task.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                <button className="w-full py-2 bg-zinc-700 text-white rounded-md hover:bg-green-600 transition duration-300">
                  Go to Quiz
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;

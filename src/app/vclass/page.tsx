import { buttonVariants } from "@/components/ui/Button";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

async function getSchedule() {
  const res = await fetch("https://1ka28.000webhostapp.com/jadwalmatkul.php");
  return res.json();
}

async function getTask() {
  const res = await fetch("https://apivclass.herokuapp.com/upcoming", {
    next: { revalidate: 10000 },
  });
  return res.json();
}

const UpcomingTasks = async () => {
  const tasks = await getTask();
  const schedule = await getSchedule();
  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "self-start -mt-20"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Home
      </Link>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Upcoming Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task: any, index: any) => (
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
        <h1 className="text-2xl font-bold mb-4 py-6">Schedule</h1>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Class Code</TableHead>
              <TableHead>Day</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Instructor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item: any, index: any) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <TableCell>{item[0]}</TableCell>
                <TableCell>{item[1]}</TableCell>
                <TableCell>{item[2]}</TableCell>
                <TableCell>{item[3]}</TableCell>
                <TableCell>{item[4]}</TableCell>
                <TableCell>{item[5]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default UpcomingTasks;

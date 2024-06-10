import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Projects() {

    const projects = await getProjects()

    return (
        <>
            <h2 className="mt-10 font-bold text-gr text-3xl"> Our Projects: </h2>

            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projects.map(project => (
                        <div key={project._id} className="border border-gray-500 rounded-md p-2">

                            {project.image && <Image
                                src={project.image}
                                alt={project.name}
                                width={250}
                                height={100}

                                className="object-cover rounded-lg border border-gray-500"

                            />}
                            <div>
                                {project.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
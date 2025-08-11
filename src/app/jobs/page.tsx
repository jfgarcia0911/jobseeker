


export default async function JobsPage() {


    return (
        <div className="mt-8 mx-40">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Jobs </h1>
                <form  className="grid gap-4 md:grid-cols-3">
                    <input type="text" placeholder="Search jobs..." className="border border-gray-200 p-2 rounded-md focus:ring-blue-600 focus:ring-2 focus:outline-none" />
                    <select className="border border-gray-200 p-2 rounded-md  focus:ring-blue-600 focus:ring-2 focus:outline-none">
                        <option value="">All Types</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                    <input type="text" placeholder="Location" className="border border-gray-200 p-2 rounded-md focus:ring-blue-600 focus:ring-2 focus:outline-none" />
                    <button type="submit" className="md:col-span-3 rounded-md p-2 text-white bg-blue-600 hover:bg-blue-700">Search</button>
                </form>
            </div>
        </div>

    ) 
}
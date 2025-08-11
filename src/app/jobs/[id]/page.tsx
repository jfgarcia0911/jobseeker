



export default async function JobPage({params}: {params: Promise<{id: string}>}){

    const jobId = (await params).id

    const job = await prisma.job.findUnique({
        where: {id: jobId},
        include: {postedBy: true},
    })
}
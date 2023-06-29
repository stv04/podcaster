'use client'
import { Table } from "react-bootstrap";
import { Item } from "../models/individualPodcast.model";
import Link from "next/link";

export default function({capitulos, podcastId}: {capitulos: Item[], podcastId: string}) {
    return <div className="col-span-2">
        <h1 className="rounded shadow-md p-3 overflow-auto my-4"><b>Espisodes: {capitulos.length}</b></h1>

        <div className="shadow-md p-3 overflow-auto" 
            style={{height: "75vh"}}
        >
            <Table responsive striped hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {capitulos.map(c => (
                        <tr key={c.guid}>
                            <td> <Link href={`${podcastId}/episode/${c.guid}`}>{c.title}</Link></td>
                            <td>{c.pubDate}</td>
                            <td>{c["itunes:duration"]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
}
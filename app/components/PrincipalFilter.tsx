import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import { Entry } from "../models/podcasts.model"
import { Form } from "react-bootstrap";

export default function PrincipalFilter({listaPrincipal, listaFiltrada, setPodcasts}:{listaPrincipal: Entry[], listaFiltrada: Entry[], setPodcasts: Dispatch<SetStateAction<Entry[]>>}) {
    const cantidad = listaFiltrada.length;

    const onHandleKeyup = (ev:BaseSyntheticEvent) => {
        const val = ev.target.value;
        if(val === "") return setPodcasts(listaPrincipal);

        const filtro = listaPrincipal.filter(p => {
            const presenteEnTitulo = p.title.label.toUpperCase().includes(val.toUpperCase());
            const presenteEnArtista = p["im:artist"].label?.toUpperCase().includes(val.toUpperCase());

            return presenteEnArtista || presenteEnTitulo;
        });

        setPodcasts(filtro);

    }

    return <div className="flex flex-row justify-end items-baseline my-5">
        <span className="mr-2 bg-cyan-600 px-2 rounded-md text-neutral-50">
            {cantidad}
        </span>

        <Form.Group >
            <Form.Control type="email" placeholder="Filter" onKeyUp={onHandleKeyup}/>
        </Form.Group>

    </div>
}
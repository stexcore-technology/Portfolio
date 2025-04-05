import { component$, Slot } from "@builder.io/qwik";

interface IBoxProps {
    px?: number,
    py?: number,
    pt?: number,
    pl?: number,
    pr?: number,
    pb?: number,
    mx?: number,
    my?: number,
    mt?: number,
    mb?: number,
    ml?: number,
    mr?: number
}

export default component$<IBoxProps>((props) => {

    // Margin
    let ml = props.ml ?? props.mx;
    let mr = props.mr ?? props.mx;
    let mt = props.mt ?? props.my;
    let mb = props.mb ?? props.my;

    // Padding
    let pl = props.pl ?? props.px;
    let pr = props.pr ?? props.px;
    let pt = props.pt ?? props.py;
    let pb = props.pb ?? props.py;

    return (
        <div style={{ 
            paddingTop: pt,
            paddingBottom: pb,
            paddingLeft: pl,
            paddingRight: pr,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            marginRight: mr
        }}>
            <Slot></Slot>
        </div>
    )
});
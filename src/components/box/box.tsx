import { component$, Slot } from "@builder.io/qwik";

interface IBoxProps {
    justifyContent?: HTMLStyleElement["style"]["justifyContent"],
    alignItems?: HTMLStyleElement["style"]["alignItems"],
    display?: HTMLStyleElement["style"]["display"],
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
    const ml = props.ml ?? props.mx;
    const mr = props.mr ?? props.mx;
    const mt = props.mt ?? props.my;
    const mb = props.mb ?? props.my;

    // Padding
    const pl = props.pl ?? props.px;
    const pr = props.pr ?? props.px;
    const pt = props.pt ?? props.py;
    const pb = props.pb ?? props.py;

    return (
        <div style={{ 
            paddingTop: pt,
            paddingBottom: pb,
            paddingLeft: pl,
            paddingRight: pr,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            marginRight: mr,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            display: props.display
        }}>
            <Slot></Slot>
        </div>
    )
});
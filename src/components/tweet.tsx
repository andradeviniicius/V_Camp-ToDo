type tweetProps = {
    text: string;
    // Posso deixar essa prop 
    // /\opcional/\ ou 
    // \/obrigatoria\/
    // text?: string;

}

export function Tweet(props: tweetProps) {
    return (
        <p>{props.text}</p>
    )
}
import ReactMarkdown from "react-markdown";

const Previewer = (props) => {
  return (
    <div>
      <h1>Previewer</h1>
      <ReactMarkdown children={props.text.replace(/\n/gi, "&nbsp; \n")} />
    </div>
  );
};

export default Previewer;

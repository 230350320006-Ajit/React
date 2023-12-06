import Question from "./Question";
import "./styles.css";

export default function App(){
  return(
    <>
    <h1> FAQ : Navigation</h1>
    <div className="container">
      <h2> Frequently Asked Questions</h2>
      <div className="questions">
        {questions.map((question)=>(
          <Question key={question.id} question={question}/>
        ))}
      </div>
    </div>
    </>
  );
}
const questions =[
  {
    id:1,
    title :" service ",
    info : "service information here......."
  },
  {
    id:2,
    title :" how can i join  ",
    info : "joining sets information here......."
  },
  {
    id:3,
    title :" feedback ",
    info : "feedback information here......."
  }  
];
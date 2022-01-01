import React from "react";
import { Card, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../course/course.css";

// export default class Course extends Component {
//   render() {
//     return (
//       <>
//       <h1>Course Section</h1>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src="holder.js/100px180" />
//           <Card.Body>
//             <Card.Title>CRNS</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Enter</Button>
//           </Card.Body>
//         </Card>
//       </>
//     );
//   }
// }

const Course = () => {
    return (
       
        <Card className="coursedetail" style={{ width: "18rem" }}>
          <Card.Img variant="top" width="276px" height="180px" src="https://media.istockphoto.com/photos/internet-cyber-security-picture-id463383675?k=20&m=463383675&s=170667a&w=0&h=AHL1Wfj0t_7muWzqgYYcXvbgets-jSWQB12wgU5kLCA=" />
          <Card.Body>
            <Card.Title>CRNS</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href="/Assignment" variant="primary">Enter</Button>
          </Card.Body>
        </Card>
      
     
        
        
    )
}

export default Course
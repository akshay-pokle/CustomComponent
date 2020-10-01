import * as React from 'react';
import moment from 'moment'

// import SockJsClient from 'react-stomp';
import CSVReader from 'react-csv-reader';
import './App.css';



const readCSV = () => {
 
}


let csvData:any;
let count :number = 0;


class App extends React.Component {
private clientRef:any = null;
private sendMessage = () => {
    this.clientRef.sendMessage('192.168.1.113:8080/stocks/tickData/', this.doStuff);
  }

 

  private continueExecution = () => {
    let dataToSend:any = csvData[count++];
    dataToSend = { ...dataToSend, date: moment(new Date(dataToSend.date)).format('yyyy-mm-dd hh:mm:ss') };
    return JSON.stringify({ dataToSend })
  }
  componentDidMount() {
    readCSV();    
    // this.sendMessage();
  }
  private doStuff = () => {
    setTimeout(this.continueExecution, 1000);
  }
  render():any {
    return (
      <div className="App">
         {/* <SockJsClient url='192.168.1.113:8080/tick' topics={['/stocks/topic']}
            onMessage={(msg: any) => { console.log(msg); }}
            ref={ (client: any) => { this.clientRef = client }} /> */}
             <CSVReader onFileLoaded={(data:any, fileInfo:any) => console.log(data, fileInfo)} />
      </div>
    );
  }

}

export default App;

  // connect = () => {
  //   var socket = new SockJS('192.168.1.113:8080/tick');
  //   stompClient = Stomp.over(socket);
  //   stompClient.connect({}, function (frame) {
  //     setConnected(true);
  //     console.log('Connected: ' + frame);
  //   });
  // }

  // disconnect = () => {
  //   if (stompClient !== null) {
  //     stompClient.disconnect();
  //   }
  //   setConnected(false);
  //   console.log("Disconnected");
  // }

  // sendName = () => {
  //   stompClient.send("192.168.1.113:8080/stocks/tickData", {}, doStuff);
  // }

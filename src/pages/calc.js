import React from "react";
import CalcResult from "./CalcResult";
import video from "../sass/img/header-1.mp4"

class Calc extends React.Component {
  state = {
    check: true,
    ageValue: "",
    weightValue: "",
    heightValue: "",
    result: 0,
    activity: "",
    MaleInput: false,
    FemaleInput: false,
    PPM: 0,
    emptyInput: "",
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  handleCheck = () => {
    this.setState({
      check: !this.state.check,
    });
  };
  ageValueinput(e) {
    this.setState({
      ageValue: e.target.value,
    });
    if(this.state.ageValue < 0){
      
      this.setState({
        ageValue: "",
        
      })
     
    }
  }
  weightValueinput(e) {
    this.setState({
      weightValue: e.target.value,
    });
    if(this.state.weightValue < 0){
      
      this.setState({
        weightValue: "",
        
      })
     
    }
  }
  heightValueinput(e) {
    this.setState({
      heightValue: e.target.value,
    });
    if(this.state.heightValue < 0){
      
      this.setState({
        heightValue: "",
        
      })
     
    }
  }
  handleActivityInput(e) {
    this.setState({
      activity: e.target.value,
    });
  }
  checkPPM() {
    if (this.state.check) {
      this.setState({
        PPM:
          66 +
          13.7 * this.state.weightValue +
          5 * this.state.heightValue -
          6.8 * this.state.ageValue,
      });
    } else {
      this.setState({
        PPM:
          655 +
          9.6 * this.state.weightValue +
          1.8 * this.state.heightValue -
          4.7 * this.state.ageValue,
      });
    }
  }

  checkResult() {
    if (this.state.activity === "Bardzo mała aktywność") {
      this.setState({
        activity: 1.3,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Bardzo mała aktywność",
        };
      });
    } else if (this.state.activity === "Mała aktywność" && this.state.check) {
      this.setState({
        activity: 1.6,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Mała aktywność",
        };
      });
    } else if (this.state.activity === "Mała aktywność" && !this.state.check) {
      this.setState({
        activity: 1.5,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Mała aktywność",
        };
      });
    } else if (
      this.state.activity === "Średnia aktywność" &&
      this.state.check
    ) {
      this.setState({
        activity: 1.7,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Średnia aktywność",
        };
      });
    } else if (
      this.state.activity === "Średnia aktywność" &&
      !this.state.check
    ) {
      this.setState({
        activity: 1.6,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Średnia aktywność",
        };
      });
    } else if (this.state.activity === "Duża aktywność" && this.state.check) {
      this.setState({
        activity: 2.1,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Duża aktywność",
        };
      });
    } else if (this.state.activity === "Duża aktywność" && !this.state.check) {
      this.setState({
        activity: 1.9,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Duża aktywność",
        };
      });
    } else if (
      this.state.activity === "Bardzo duża aktywność" &&
      this.state.check
    ) {
      this.setState({
        activity: 2.4,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Bardzo duża aktywność",
        };
      });
    } else if (
      this.state.activity === "Bardzo duża aktywność" &&
      !this.state.check
    ) {
      this.setState({
        activity: 2.2,
      });
      this.setState((prevState) => {
        return {
          result: Math.round(prevState.activity * prevState.PPM),
          activity: "Bardzo duża aktywność",
        };
      });
    }
  }
  showResult() {
    if (
      !this.state.weightValue ||
      !this.state.heightValue ||
      !this.state.ageValue ||
      !this.state.activity
    ) {
      this.setState({
        emptyInput: "Wypełnij wszystkie pola formularza",
      });
      return;
    }
    this.checkPPM();
    this.checkResult();
  }
  reset() {
    this.setState({
      check: true,
      ageValue: "",
      weightValue: "",
      heightValue: "",
      result: 0,
      activity: "",
      MaleInput: false,
      FemaleInput: false,
      PPM: 0,
      emptyInput: "",
    });
  }
  render() {
    return (<>
 <div className="Calc_video">
        <video src={video} autoPlay muted loop className="Calc_video-content">
        </video>
        </div>
      <div className="row">
        <div className="col-1-of-2">
          <form className="Calc_submit" onSubmit={this.handleSubmit.bind(this)}>
            <div className="Calc_submit-WomanOrMan">
            <input
              className="Calc_submit-input"
              id="Male"
              type="radio"
              value="Male"
              onChange={this.handleCheck.bind(this)}
              checked={this.state.check}
            />
            <label htmlFor="Male" className="Calc_submit-label">Mężczyzna</label> 
            <input
              className="Calc_submit-input"
              id="Female"
              type="radio"
              value="Female"
              onChange={this.handleCheck.bind(this)}
              checked={!this.state.check}
            />
              <label htmlFor="Female" className="Calc_submit-label">Kobieta</label></div>
            <br />
            <label className="Calc_submit-label">Wiek:</label>
            <input
              
              className="Calc_submit-input"
              value={this.state.ageValue}
              type="number"
              placeholder="Podaj swój wiek"
              onChange={this.ageValueinput.bind(this)}
            />
            <br />
            <label className="Calc_submit-label">Waga w kg:</label>
            <input
              className="Calc_submit-input"
              value={this.state.weightValue}
              type="number"
              placeholder="Ile ważysz?"
              onChange={this.weightValueinput.bind(this)}
            />
            <br />
            <label className="Calc_submit-label">Wzrost w cm:</label>
            <input
              className="Calc_submit-input"
              value={this.state.heightValue}
              type="number"
              placeholder="Podaj swój wzrost"
              onChange={this.heightValueinput.bind(this)}
            />
            <br />
           <label className="Calc_submit-label">Wybierz rodzaj aktywności:</label>
            <input
            className="Calc_submit-input"
              list="Aktywność"
              onChange={this.handleActivityInput.bind(this)}
              value={this.state.activity}
              placeholder="Rodzaj aktywności"
            />
            <datalist id="Aktywność">
              <option value="Bardzo mała aktywność" />
              <option value="Mała aktywność" />
              <option value="Średnia aktywność" />
              <option value="Duża aktywność" />
              <option value="Bardzo duża aktywność" />
            </datalist>
            <br/>
            <button className="btn-calc" onClick={this.showResult.bind(this)}>Sprawdź wynik!</button>
            <button  className="btn-calc" onClick={this.reset.bind(this)}>Reset</button>
            <br />
            {this.state.emptyInput}
          </form>
        </div>
        <div className="col-1-of-2">
          
          <CalcResult result={this.state.result} />
        </div>
      </div>
     </>
    );
  }
}

export default Calc;

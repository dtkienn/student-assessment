import React from 'react';

export default class Form extends React.Component {
    state = {
        studentName: '',
        teacherName: '',
        moralMark: '',
        abilityMark: '',
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        switch (this.state.moralMark) {
            case ("1"):
                document.getElementById('greeting2').innerHTML = `- ${this.state.studentName} có ý thức hoàn thành các yêu cầu của giáo viên, tuy nhiên đôi khi còn mất tập trung/mất trật tự trong giờ.`;
                break
            case ("2"):
                document.getElementById('greeting2').innerHTML = `- ${this.state.studentName} có ý thức cầu tiến cao, ngoan ngoãn, lễ phép với giáo viên và tập trung cao độ trong giờ học.`;
                break
            default:
                break
        }
        switch (this.state.abilityMark) {
            case ("1"):
                document.getElementById('greeting3').innerHTML = `- ${this.state.studentName} hoàn thành bài khá tốt, tuy nhiên còn cần nhiều giúp đỡ của giáo viên.`;
                break
            case ("2"):
                document.getElementById('greeting3').innerHTML = `- ${this.state.studentName} hoàn thành bài nhanh, làm bài độc lập và có ý tưởng tốt. Cố gắng phát huy nhé!`;
                break
            default:
                break
        }

        this.props.onSubmit(this.state);
        this.setState({
            studentName: '',
            teacherName: '',
            moralMark: '',
            abilityMark: '',
        })
        document.getElementById('greeting1').innerHTML = `Giáo viên xin gửi nhận xét cuối buổi của học sinh ${this.state.studentName} như sau:`;
        document.getElementById('greeting4').innerHTML = `Giáo viên, ${this.state.teacherName}`;

    }
    render() {
        return (
            <form>
                <input name="studentName" value={this.state.studentName} placeholder='Student Name' onChange={e => this.change(e)} /> <br></br>
                <input name="teacherName" value={this.state.teacherName} placeholder='Teacher Name' onChange={e => this.change(e)} /> <br></br>
                <select name="moralMark" onChange={e => this.change(e)}>
                    <option value="0" defaultValue>--- Moral Mark ---</option>
                    <option value="1">Average</option>
                    <option value="2">Good</option>
                </select> <br></br>
                <select name="abilityMark" onChange={e => this.change(e)}>
                    <option value="0" defaultValue>--- Ability Mark ---</option>
                    <option value="1">Average</option>
                    <option value="2">Good</option>
                </select> <br></br>
                <div className="output" id="greeting1"></div>
                <div className="output" id="greeting2"></div>
                <div className="output" id="greeting3"></div>
                <div className="output" id="greeting4"></div>
                <button onClick={e => this.onSubmit(e)}>Submit!</button> <br></br>
            </form>
        );
    }
}

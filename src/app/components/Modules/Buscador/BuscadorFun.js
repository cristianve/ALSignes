import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles';
import ReactDOM from 'react-dom';


const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 4 * 2)]: {
			width: 700,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	}
})

function Buscar(props) {
	const { classes } = props

	// I'm produce state using useState.
	// The second parameter that will keep the first parameter value will change the value.
	const [palabra, setPalabra] = useState('')


	function onSubmit(e) {
		e.preventDefault();//blocks the postback event of the page
		var query = palabra;
		if (query.length > 15) {
			alert('Limite máximo 15 letras');
			return;
		}
		var splitQuery = query.split("");
		fetch('/api/getVideoBuscador?name=' + palabra) // Fetch image based on text entered
			.then(response => response.json())
			.then(resData => {
				console.log('resData', resData);

				var check = document.getElementById('btn');

				if (!document.getElementById('container')) {
					var con = document.createElement("div");
					con.setAttribute("id", "container");
					check.appendChild(con);

				}

				var contain = document.getElementById('container');
				if (resData.data.length > 1) {

					if (document.getElementById('container')) {
						contain.parentNode.removeChild(contain);
						var con = document.createElement("div");
						con.setAttribute("id", "container");
						check.appendChild(con);
						contain = document.getElementById('container');
					}

					// ReactDOM.render(<p style={{textAlign: 'center'}}>NO RECORD FOUND !</p>, document.getElementById('container'));
					let videos = resData.data;
					if (document.getElementById('container-video')) {
						var vidcon = document.getElementById('container-video');
						vidcon.parentNode.removeChild(vidcon);
					}


					var queryString = '';
					for (var j = 0; j < splitQuery.length; j++) {
						queryString += splitQuery[j].toUpperCase() + ' + ';
					}
					queryString = queryString.substring(0, queryString.length - 2);

					var ele, para, heading;

					heading = document.createElement("h3");
					heading.setAttribute("id", "head");
					contain.appendChild(heading);
					document.getElementById("head").innerHTML = queryString;

					for (var i = 0; i < videos.length; i++) {

						let data = videos[i];
						const Videodata = ({ data }) =>
							<video style={{ marginTop: 30 }} className="video-container video-container-overlay" width="100%" height="100%" autoPlay={false} controls>
								<source src={`data:video/mp4;base64,${data}`} type="video/mp4" />
							</video>


						ele = document.createElement("div");
						para = document.createElement("p");
						ele.setAttribute("id", "container" + i);
						para.setAttribute("id", "videotext" + i);
						para.setAttribute("class", "videohead");
						contain.appendChild(para);
						contain.appendChild(ele);
						document.getElementById("videotext" + i).innerHTML = splitQuery[i].toUpperCase() + ':';
						// document.body.appendChild(ele);
						ReactDOM.render(<Videodata data={data} />, document.getElementById('container' + i));

					}

				}

				else {

					if (!document.getElementById('container-video')) {
						contain.parentNode.removeChild(contain);
						var con = document.createElement("div");
						con.setAttribute("id", "container-video");
						check.appendChild(con);

					}

					let data = resData.data;
					const Videodata = ({ data }) =>
						<video style={{ marginTop: 30 }} className="video-container video-container-overlay" width="100%" height="100%" autoPlay={false} controls>
							<source src={`data:video/mp4;base64,${data}`} type="video/mp4" />
						</video>

					ReactDOM.render(<Videodata data={data} />, document.getElementById('container-video'));
				}
			})

	}


	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>


				<Typography component="h1" variant="h5">
					Introduce la palabra que quieres buscar:
       			</Typography>
				<form className={classes.form} onSubmit={onSubmit}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="palabra">Introduce la palabra que quieres buscar</InputLabel>

						<Input id="palabra" name="palabra" autoComplete="off" autoFocus value={palabra} onChange={e => setPalabra(e.target.value)} />
					</FormControl>
					<Button onClick={MostrarPalabra} //Esta función todavia no esta hecha
						type="submit"
						variant="contained"
						display="flex"
						color="primary"
						className={classes.submit}>
						Buscar
            </Button>
					<div>

					</div>
					<div id="btn"></div>
					<div id="container"></div>
					<div id="container-video"></div>
					{/*<div id="container0"></div>
			<div id="container1"></div>*/}
				</form>
			</Paper>
		</main>
	)
}
function MostrarPalabra(palabra) {

}


export default withStyles(styles)(Buscar)
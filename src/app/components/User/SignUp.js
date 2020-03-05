import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import CssBaseline from '@material-ui/core/CssBaseline';

import * as lit from '../literals.js'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
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
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
	group: {
		margin: `${theme.spacing.unit}px 0`,
	},
})

function Register(props) {
	const { classes } = props
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [value, setValue] = React.useState('no');

	function onSubmit(e) {
	}

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (

		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					{lit.reg}
				</Typography>
				<form className={classes.form} onSubmit={onSubmit} method="POST">
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="name">	{lit.nom}</InputLabel>
						{/* When the name field is changed, setName will run and assign the name to the value in the input. */}
						<Input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">{lit.email}</InputLabel>
						{/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
						<Input id="email" type="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">	{lit.pass}</InputLabel>
						{/* When the password field is changed, setPassword will run and assign the password to the value in the input. */}
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<FormLabel component="legend">	{lit.first}</FormLabel>
						<RadioGroup
							aria-label="Gender"
							name="experiencia"
							className={classes.group}
							value={value}
							onChange={handleChange}
						>
							<FormControlLabel value="si" control={<Radio />} label="Si" />
							<FormControlLabel value="no" control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}>
						{lit.reg}
					</Button>
					<Button
						component={Link} to="/login"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}>
						{lit.ini}
					</Button>
				</form>
			</Paper>
		</main>

	)
}



export default withStyles(styles)(Register)
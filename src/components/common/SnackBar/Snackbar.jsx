import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { snackbaropenOnEnrollment } from '../../../store/actions/contestAction';

const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5),
    },
}));

function MySnackbar(props) {
    const classes = useStyles();
    function handleClose(event, reason) {
        props.setSnackbarOpenClose(false);
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={props.isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">You are enrolled successfully</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                     </IconButton>,
                ]}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isSnackbarOpen: state.contest.snackbarOpenOnEnrollment
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setSnackbarOpenClose: (flag) => dispatch(snackbaropenOnEnrollment(flag))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MySnackbar);
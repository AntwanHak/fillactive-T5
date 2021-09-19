import { makeStyles } from '@material-ui/core/styles'

const projectID = 'bb1cb3f1-b0a9-4ec0-8e59-59cb02ac9f1b';
const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: theme.palette.background.paper
  },
  cardGrid: {
    padding: '20px'
  },
  card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow:1,
  }
}));

export default useStyles;
import {
    Paper,
    Grid,
    Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Deploy, EnvironmentItemProps, EnvironmentItemRule, Versions } from './EnvironmentItemProps';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));
const HeaderItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontWeight: 'bold'
}));

export default function EnvironmentItem(props: EnvironmentItemProps) {
    const rules: EnvironmentItemRule[] = (props.env?.rules || []).filter(it => !!it);
    const deploys: Deploy[] = (props.env?.deploys || [])
        .filter((deploy) => {
            return !!deploy
                && deploy.version
                && deploy.version.applicationId === props.appId;
        });

    return (
        <div>
            <h2>
                [{ props.env.id }]
                {' - '}
                { props.env.name }
            </h2>
            <p>{ props.env.description }</p>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid container item spacing={3} xs={3}>
                            <Grid item xs={6}>
                                <HeaderItem>KEY</HeaderItem>
                            </Grid>
                            <Grid item xs={6}>
                                <HeaderItem>VALUE</HeaderItem>
                            </Grid>
                        {
                            (rules).map((rule) => (
                                <>
                                    <Grid item xs={6}>
                                        <Item>{ rule?.key?.name }</Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>{ rule?.value }</Item>
                                    </Grid>
                                </>
                            ))
                        }
                        </Grid>
                        <Grid item spacing={3} xs={3}>
                            <Item>
                            {
                                deploys.length > 0
                                    ? (deploys).map((deploy) => (
                                        <div>
                                            {
                                                deploy?.version?.version
                                                + ' => ' +
                                                moment(deploy?.createdAt).format('DD-MM-YYYY HH:mm')
                                            }
                                        </div>
                                    ))
                                    : 'no deployed versions'
                            }
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

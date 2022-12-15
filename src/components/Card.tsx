import { Card, Grid, Text, Link, Button } from "@nextui-org/react";

interface ICardProps {
    ext: string;
    format: string;
    format_note: string;
    container: string;
    url: string
}

export default function CardComponent(props: ICardProps) {
    return (
        <Card css={{ p: "$6", mw: "410px" }}>
            <Card.Header>
                <Grid.Container>
                    <Grid xs={12}>
                        <Text h3 css={{ lineHeight: "$xs", textAlign: "center" }}>
                            {props.format_note}
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text h4 css={{ color: "$accents8" }}>{props.container}</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    {props.format}
                </Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    style={{
                        width: "100%"
                    }}
                    // icon
                    color="primary"
                    // target="_blank"
                    onPress={() => window.location.href = props.url}
                >
                    Download
                </Button>
            </Card.Footer>
        </Card>
    );
}
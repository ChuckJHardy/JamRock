import * as React from "react";

import { Card, Text, Header } from "tabler-react";

type Props = {
  className?: string,
  total: string,
  label: string,
}

const StatsCard: React.SFC<Props> = ({ 
  total,
  label,
}) => {
  return (
    <Card>
      <Card.Body className="p-3 text-center">
        <Header className="m-0">
          {total}
        </Header>
        <Text color="muted">
          {label}
        </Text>
      </Card.Body>
    </Card>
  )
}

StatsCard.displayName = "StatsCard"

export default StatsCard
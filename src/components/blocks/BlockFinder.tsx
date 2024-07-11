// react
import React, { useState } from "react";
// third-party
import { useRouter } from "next/router";
// application
import Decor from "~/components/shared/Decor";
import url from "~/services/url";
import { hrefToRouterArgs } from "~/services/router";
import { IVehicle } from "~/interfaces/vehicle";

function BlockFinder() {
    const router = useRouter();
    const [vehicle, setVehicle] = useState<IVehicle | null>(null);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!vehicle) {
            return;
        }

        router
            .push(
                ...hrefToRouterArgs(
                    url.products({
                        filters: {
                            filter_vehicle: vehicle.id.toString(),
                        },
                    })
                )
            )
            .then();
    };

    return (
        <div
            className="block block-finder"
            style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}
        >
            <Decor className="block-finder__decor" type="bottom" />
            <div
                id="parts-catalog"
                data-key="TWS-B37A42C3-9F07-4BFF-BCB7-05D6F1A2C473"
                data-back-url="/catalog/products?article?[article]&brand=[brand]"
                data-language="es"
                data-color-schema="red"
            ></div>
            <script type="text/javascript" src="https://gui.parts-catalogs.com/v2/parts-catalogs.js"></script>
        </div>
    );
}

export default React.memo(BlockFinder);

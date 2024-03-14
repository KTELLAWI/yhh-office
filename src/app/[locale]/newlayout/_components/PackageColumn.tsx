import React from 'react';
import { Package, packageTitleBGs } from './package';

export interface Package {
    name: string;
    variant: keyof typeof packageTitleBGs;
    id: string;
    href: string;
    price: string;
    slogan: string;
    description: string;
    popoular?: boolean;
    detailsOfCost: string;
    features: string[];
}

function PackageColumn({ packageDetails }: { packageDetails: Package }) {
    return (
        <Package
            highlight={packageDetails.popoular ? true : false} >
            <Package.Title variant={packageDetails.variant} className='text-white'>
                {packageDetails.name}
            </Package.Title>

            <Package.Text className="mb-4">
                {packageDetails.slogan}
            </Package.Text>

            <Package.Price>{packageDetails.price}</Package.Price>

            <Package.Text className="text-xs leading-[22px] p-4">
                {packageDetails.detailsOfCost}
            </Package.Text>

            <Package.FeatureList>

                {
                    packageDetails.features.map((feature, index) => (
                        <Package.FeatureItem
                            key={index}
                            title={feature}
                            desc={feature}
                            className={packageDetails.popoular ? "border-gray-50" : ""}

                        />

                    ))
                }

            </Package.FeatureList>


            <Package.CTA calLink="team/yhh-team/bronze-package"

                highlight={packageDetails.popoular ? true : false} exclusive={packageDetails.id == "exclusive" ? true : false} />


        </Package>
    );
}

export default PackageColumn;

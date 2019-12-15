import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';

import MenuMega from './MenuMega';
import MenuColumn from './MenuColumn';
import MenuLink from './MenuLink';

const MenuActivity = () => {
    const [data] = useLocalStorage('activityData');
    const categories = [
        ...new Set(
            data.map(activity => {
                return activity.category;
            })
        )
    ];

    for (let category of categories) {
        console.log(`<MenuColumn title=${category}>`);
        data.filter(activity => {
            return activity.category === category;
        }).forEach(link => {
            console.log(
                `<MenuLink to="/activiteiten/${category.toLowerCase()}/${link.title
                    .toLowerCase()
                    .replace(' ', '-')}">${link.title}</MenuLink>`
            );
        });
        console.log(`</MenuColumn>`);
    }

    return (
        <MenuMega title="Activiteiten">
            <MenuColumn title="Wandelingen">
                <MenuLink to="/activiteiten/wandelingen/lang">
                    Lange Route
                </MenuLink>
                <MenuLink to="/activiteiten/wandelingen/kort">
                    Korte Route
                </MenuLink>
            </MenuColumn>
            <MenuColumn title="Jeugd">
                <MenuLink to="/activiteiten/jeugd/voetballen">
                    Voetballen
                </MenuLink>
                <MenuLink to="/activiteiten/jeugd/zwemmen">Zwemmen</MenuLink>
                <MenuLink to="/activiteiten/jeugd/Schieten">Schieten</MenuLink>
            </MenuColumn>
            <MenuColumn title="Lezingen">
                <MenuLink to="/activiteiten/lezingen/episch">
                    Episch Verhaal
                </MenuLink>
            </MenuColumn>
            <MenuColumn title="Vogels">
                <MenuLink to="/activiteiten/vogels/huren">Hutje Huren</MenuLink>
                <MenuLink to="/activiteiten/vogels/kopen">Hutje Kopen</MenuLink>
            </MenuColumn>
        </MenuMega>
    );
};

export default MenuActivity;

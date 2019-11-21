import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route component={CollectionsOverview} exact path={`${match.path}`}/>
        <Route component={CollectionPage} exact path={`${match.path}/:collectionId`}/>
    </div>
);

export default ShopPage;
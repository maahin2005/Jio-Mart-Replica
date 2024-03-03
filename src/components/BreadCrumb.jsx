import React from 'react';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { useParams, useLocation } from 'react-router-dom';

const BreadCrumb = ({ isCurrentPage = false, pathname = '' }) => {
  const { id } = useParams();

  const location = useLocation();

  const words = pathname.split(' ');

  const shortDescription = words.slice(0, 4).join(' ');

  return (
    <Breadcrumb
      color={'#0c5273'}
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem fontWeight={700}>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem fontWeight={700}>
        <BreadcrumbLink
          href="/products"
          style={{
            borderBottom:
              location.pathname === '/products' ? '1px solid gray' : 'none',
          }}
          //   _hover={{ textDecoration: 'o' }}
        >
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage={isCurrentPage} fontWeight={700}>
        <BreadcrumbLink
          href={`/products/${id}`}
          style={{
            borderBottom:
              location.pathname === `/products/${id}`
                ? '1px solid gray'
                : 'none',
          }}
        >
          {shortDescription}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;

import React, { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './src/layout/MainLayout'
import Slider from 'src/pages/Slider'
import Body from 'src/layout/Body'
import Search from 'src/pages/Hotel/Search'
import SearchCar from 'src/pages/Car/Search'
import SearchTrans from 'src/pages/Trans/Search'
import SearchLocation from 'src/pages/Location/Search'
import Booking from 'src/pages/Hotel/Booking'
import BookingCar from 'src/pages/Car/Booking'
import BookingTrans from 'src/pages/Trans/Booking'
import BookingLocation from 'src/pages/Location/Booking'
import Admin from 'src/admin/Admin'
import Retrieve from 'src/pages/Retrieve'
import Review from 'src/pages/Review'
import SearchReview from 'src/pages/Review/Search'
import DanhGia from 'src/pages/Review/DanhGia'
import { AppContext } from 'src/context/app.context'
import Pay from 'src/component/Pay'
import Flight from 'src/component/Flight'
import FlightItem from 'src/component/FlightItem'
import Message from 'src/component/Message'
import Chat from 'src/pages/Chat/Chat'
const useRouterElements = () => {
  const { isAuthenticated } = useContext(AppContext)
  function ProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
  }
  function RejectedRoute() {
    return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
  }
  const elements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <Body />
          <Message text='ping-abc' />
        </MainLayout>
      )
    },
    {
      path: 'hotel',
      children: [
        {
          path: 'search',

          element: (
            <>
              <Search />
              <Message text='ping-abc' />
            </>
          )
        },
        {
          path: 'booking',
          element: (
            <>
              <Booking />
              <Message text='ping-abc' />
            </>
          )
        }
      ]
    },
    {
      path: 'flight',
      children: [
        {
          path: '',
          element: (
            <>
              <Flight />
              <Message text='ping-abc' />
            </>
          )
        },
        {
          path: 'list',
          element: (
            <>
              <FlightItem />
              <Message text='ping-abc' />
            </>
          )
        }
      ]
    },
    {
      path: 'location',
      children: [
        {
          path: 'search',
          element: (
            <>
              <SearchLocation />
              <Message text='ping-abc' />
            </>
          )
        },
        {
          path: 'booking',
          element: (
            <>
              <BookingLocation />
              <Message text='ping-abc' />
            </>
          )
        }
      ]
    },
    {
      path: 'transportation',
      children: [
        {
          path: 'search',
          element: (
            <>
              <SearchTrans />
              <Message text='ping-abc' />
            </>
          )
        },
        {
          path: 'booking',
          element: (
            <>
              <BookingTrans />
              <Message text='ping-abc' />
            </>
          )
        }
      ]
    },
    {
      path: 'car',
      children: [
        {
          path: 'search',
          element: (
            <>
              <SearchCar />
              <Message text='ping-abc' />
            </>
          )
        },
        {
          path: 'booking',
          element: (
            <>
              <BookingCar />
              <Message text='ping-abc' />
            </>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'admin',
          element: (
            <>
              <Admin />
              <Message text='ping-abc' />
            </>
          )
        },
        {
          path: 'pay',
          element: <Pay />
        }
      ]
    },
    {
      path: 'retrieve',
      element: (
        <>
          <Retrieve />
          <Message text='ping-abc' />
        </>
      )
    },
    {
      path: 'review',
      element: (
        <>
          <Review />
          <Message text='ping-abc' />
        </>
      )
    },
    {
      path: 'review-search',
      element: (
        <>
          <SearchReview />
          <Message text='ping-abc' />
        </>
      )
    },
    {
      path: 'danh-gia',
      element: (
        <>
          <DanhGia />
          <Message text='ping-abc' />
        </>
      )
    }
    // ,{
    //   path: 'chat',
    //   element: (
    //     <>
    //       <Chat />
    //       <Message text='ping-abc' />
    //     </>
    //   )
    // }
  ])
  return elements
}

export default useRouterElements

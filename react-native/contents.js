Part 1 GETTING STARTED WITH REACT NATIVE

1. Getting started with React Native 3
  1.1 Introducing React and React Native 4
        A basic React class 5 React lifecycle 6
  1.2 What you'll learn
  1.3 What you should know
  1.4 Understanding how React Native works
        JSX, Threading, React, Unidirectional data flow,
        Diffing, Thinking in Components
  1.5 Acknowledging React Native's strengths
    Developer availability, Developer Productivity,
    Performance, One way data flow, Developer Experience
    Transpilation, Productivity and Efficiency, Community
    Open Source, Immediate updates, Other solutions for
    building cross-platform mobile applications
  1.6 React Native's drawbacks
  1.7 Creating and using basic components
    An overview of components, Native components, Component composition,
    Exportable components, Combining components

1. Understanding React
  2.1 Managing component data using state
        Correctly manipulating component state
  2.2 Managing component data using props
  2.3 React component specifications
        Using the render method to create a UI, Using property
        initializsers and constructors
  2.4 React lifecycle methods
        The static getDerivedStateFromProps method
        The componentDidMount lifecycle method
        The shouldComponentUpdate lifecycle method
        The componentDidUpdate lifecycle method
        The componentWillUnmount lifecycle method

3. Building your first React Native app
  3.1 Laying out the todo app
  3.2 Coding the todo app
  3.3 Opening the developer menu
        Opening the developer menu in the iOS simulator,
        Opening the developer menu in the Android emulator,
        Using the developer menu
  3.4 Continuing building the todo app


Part 2 Developing Applications in React Native
  4  Introduction to styling
    4.1 Applying and organizing styles in React Native
          Applying styles in applications, Organizing styles,
          Styles are code
    4.2 Styling view components
          Setting the background color, Setting border properties,
          Specifying margins and padding, Using position to place components
          Profile card positioning
    4.3 Styling Text components
        Text components vs View components, Font styles,
        Using decorative text styles


5. Styling in depth
  5.1 Platform specific sizes and styles
        Pixels, points, and DPs, Creating drop shadows with ShadowPropTypesIOS
        and Elevation, Putting it into practice: drop shadows in the
        ProfileCard
  5.2 Using transformations to move, rotate, scale, and skew components
        3D effects with perspective, Moving elements along the x- and y-
        axes with translateX and translateY, Rotating elements with rotateX,
        rotateY, and rotateZ(rotate), Setting visibility when rotating an
        element more than 90 degrees, Scaling objects on the screen with scale,
        scaleX, and scaleY, Using the scale transform to create the thumbnail
        of the ProfileCard, Skewing elements along the x- and y-axes with
        skewX and skewY, Transformation key points
  5.3 Using flexbox to lay out components
        Altering a component's dimensions with flex, Specifying the direction
        of the flex with flex direction, Defining how space is used around a
        component with justifyContent, Aligning children in a container with
        alignItems, Overriding the parent container's alignment with alignSelf,
        Preventing clipped items with flexWrap

6. Navigation
  6.1 React Native Navigation vs. web navigation
  6.2 Building a navigation-based app
  6.3 Persisting data
  6.4 Using DrawerNavigator to create drawer-based navigation

7. Animations
  7.1 Introducing the Animated API
  7.2 Animating a form input to expend on focus
  7.3 Creating a custom loading animation using interpolation
  7.4 Creating multiple parallel animations
  7.5 Creating an animated sequence
  7.6 Using Animated.stagger to stagger animation start times
  7.7 Other useful tips for using the Animated library
        Resetting an animated value, Invoking a callback, Offloadin animations
        to the native thread, Creating a custom animatable component using
        createAnimatedComponent

8. Using the Redux data architecure library
  8.1 What is Redux ?
  8.2 Using context to create and manage global state in a React application
  8.3 Implementing Redux with a React Native app
  8.4 Creating Redux reducers to hold Redux state
  8.5 Adding the provider and creating the store
  8.6 Accessing data using the connect function
  8.7 Adding actions
  8.8 Deleting items from a Redux store in a Reducer


PART 3 API REFERENCE

9. Implementing cross-platform APIs
  9.1 Using the Alert api to create cross-platform notifications
        Use cases for alerts, Example of using alerts
  9.2 Using the AppState API to detect the current application state
        Use cases for AppState, Example of using AppState
  9.3 Using the AsyncStorage API to persist data
        Use cases for AsyncStorage, Example of using AsyncStorage
  9.4 Using the Clipboard API to copy text into the user's clipboard
        Use cases for Clipboard, Example of using Clipboard
  9.5 Using the Dimensions API to get the user's screen information
        Use cases for the Dimensions API, Example of using the Dimensions API
  9.6 Using the Geolocation API to get the user's current location information
        Use cases for the Geolocation API, Example of using Geolocation
  9.7 Using the Keyboard API to control the location and functionality of the
        native keyboard
  9.8 Using NetInfo to get the user's current online/offline status
        Use cases for NetInfo, Example of using NetInfo
  9.9 Getting information about touch and gesture events with PanResponder
        Use cases for the PanResponder API, Example of using PanResponder

10. Implementing ios-specific components and APIs\
  10.1 Targetting platform-specific code
          ios and android file extentions, Detecting the platform using the
          Platform API
  10.2 DatePickerIOS
        Example of using DatePickerIOS
  10.3 Using PickerIOS to work with lists of values
        Example of using PickerIOS
  10.4 Using ProgressViewIOS to show loading indicators
        Use cases for ProgressViewIOS, Example of using ProgressViewIOS
  10.5 Using SegmentedControlIOS to create horizontal tab bars
        Use cases for SegmentedControlIOS, Example of using SegmentedControlIOS
  10.6 Using TabBarIOS to render tabs at the bottom of the UI
        Use cases for TabBarIOS, Example of using ActionSheetIOS

11. Implementing Android specific components and APIs
  11.1 Creating menu using DrawerLayoutAndroid
  11.2 Creating a toolbar with ToolbarAndroid
  11.3 Implementing scrollable paging with ViewPagerAndroid
  11.4 Using the DatePickerAndroid API to show a native date picker
  11.5 Creating a time picker with TimePickerAndroid
  11.6 Implementing Android toasts using ToastAndroid


Part 4 Bringing it all together
  12 Building a star wars app using cross-platform components
  12.1 Creating the app and installing dependencies
        Importing the People Component and creating the container component
        Creating the Navigation Component and registering routes
        Creating the main class for the initial view
  12.2 Creating the People Component using FlatList, Modal, and Picker
        Creating the state and setting up a fetch call to retrieve data
        Adding the remaining class methods
        Implementing the render method
  12.3 Creating the HomeWorld component
        Creating the HomeWorld class and initializing state
        Fetching data from the API using the url prop
        Wrapping up the HomeWorld component
        

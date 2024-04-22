// The useFetch and useAsyncData Nuxt composables have an unsolved bug:
// they are firing requests twice if the function calls refreshNuxtData()

// The refresh() function can only be called from the page where it was 
// declared or passed down by props, which isn't possible in cases like the CustomDialog component

// Idea for a workaround: define a useRefresh composable that will store a reactive boolean
// Get requests should WATCH this boolean and refire everytime it changes
// Post, Put and Delete requests should toggle the boolean so the Get requests fire again right after and keep the data updated. 

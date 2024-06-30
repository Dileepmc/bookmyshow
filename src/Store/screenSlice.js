import { createSlice } from "@reduxjs/toolkit";


export const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        tiers: [],
        selectedSeats: [],
        totalPrice: 0,
        selectedShow: null
    },
    reducers: {
        addTiers: (state, action) => {
            state.tiers = action.payload
        },
        selectedShow: (state, action) =>{
            state.selectedShow = action.payload
        },
        selectSeats: (state, action) =>{
            state.selectedSeats.push(action.payload)

            state.tiers.map((tier) => {
                tier.rows.map((row) => {
                    if (row.name === action.payload.rowName){
                        const price = tier.price
                        state.totalPrice = state.totalPrice+price
                    }
                        
                })
            })
        },
        deselectSeat: (state, action) =>{
            const deselectSeat = action. payload
            state.selectedSeats = state.selectedSeats.filter(selectedSeat=>{
                if(selectedSeat.rowName === deselectSeat.rowName && selectedSeat.seatNumber === deselectSeat.seatNumber){

                }
                else{
                    return selectedSeat

                }
            })
            let deselectedSeatPrice;
            state.tiers.map((tier) => {
                tier.rows.map((row) => {
                    if (row.name === action.payload.rowName){
                        state.totalPrice = state.totalPrice-tier.price
                    }
                        
                })
            })
            
        }
    }
})
export const { addTiers, selectSeats, selectedShow, deselectSeat} = screenSlice.actions
export default screenSlice.reducer 
import domainsReducer from "./reducer";
import { receiveDomains } from "./actions";
import { DomainsState } from "./types";


const domains = ["US_OK-WOK", "FR_NK-WOL", "FR_OK-NPP", "EN_NK-NRP", "EN_BL-WOL"]


describe('reducers', () => {
  describe('domains', () => {
    it('should initialize to an empty list', () => {
      const unknownAction: any = {}
      const newState = domainsReducer(undefined, unknownAction);

      expect(newState).toEqual([])
    });

    it('should store the domains', () => {
      const oldState: DomainsState = [];
      const action = receiveDomains(domains)
      const newState = domainsReducer(oldState, action);

      expect(newState).toEqual(domains)
    });
  })
})

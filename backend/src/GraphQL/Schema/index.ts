import { gql } from 'apollo-server';
import 'apollo-cache-control';

export const typeDefs = gql`
type Block {
	height: Int!
	hash: String!
	time: Int!
	main_chain: Boolean!
}
type Blocks {
	blocks: [Block!]
}
type Transactions @cacheControl(maxAge: 240){
  tx_index:Int!
  weight:Int
  time:String
  hash:String
}
type BlockDetails @cacheControl(maxAge: 240){
  hash: String
  prev_block:String
  block_index:Int
  size:Int
  tx:[Transactions]
}
type Query {
  blockList: Blocks
  blockDetails(hash: String): BlockDetails!
}
`;
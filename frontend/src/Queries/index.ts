import gql from 'graphql-tag';

const Block_LIST = gql`
{
	blockList {
		blocks {
			height
			hash
			time
			main_chain
		}
	}
}
`;
const Block_DETAILS = gql`

query blockDetails($hash: String!) {
	blockDetails(hash: $hash) {
		hash
		prev_block
		block_index
		size
		tx{
			tx_index
			weight
			time
			hash
		}
	}
}
`;
export {
	Block_LIST,
	Block_DETAILS
}
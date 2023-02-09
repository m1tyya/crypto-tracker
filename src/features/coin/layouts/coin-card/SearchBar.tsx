import { atom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';

import { Vector } from '~/components/vector';
import { styles } from '~/styles';

type Props = {};

export const searchAtom = atom('');

export function SearchBar({}: Props) {
	const setSearchQuery = useSetAtom(searchAtom);
	const { register, watch } = useForm({
		defaultValues: {
			search: '',
		},
	});

	setSearchQuery(() => watch('search'));

	return (
		<div
			className={styles({
				backgroundColor: '#2e3034',
				margin: '0 auto',
				display: 'flex',
				alignItems: 'center',
				marginTop: '$4',
				paddingX: '1.5rem',
				maxWidth: '50%',
				border: '2px solid #6D6D6D',
				height: '5rem',
				borderRadius: '1.5rem',
			})}>
			<Vector position={{ size: '2rem' }} Svg={BsSearch} />
			<input
				className={styles({
					backgroundColor: 'inherit',
					color: '$white',
					marginLeft: '1rem',
					flex: '1',
				})}
				id='search'
				placeholder='Search for coins'
				type='text'
				{...register('search')}
			/>
		</div>
	);
}

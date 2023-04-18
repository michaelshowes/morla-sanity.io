import { TextInput, Stack, Text, Flex, Box, Card } from '@sanity/ui';
import { set, unset } from 'sanity';
import React, { useCallback } from 'react';

type Props = {
	elementProps: {
		options: {
			prefix: string;
		};
	};
	value: string;
	onChange: any;
	schemaType: {
		options: {
			prefix: string;
		};
	};
};

export default function PrefixedInput({
	elementProps,
	value = '',
	onChange,
	schemaType
}: Props) {
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.currentTarget.value;
			onChange(inputValue ? set(inputValue) : unset());
		},
		[onChange]
	);

	const prefix = schemaType.options?.prefix;

	return (
		<Stack space={2}>
			<Flex>
				<Flex
					as={Card}
					align='center'
					paddingX={3}
					// @ts-ignore
					border
					borderRight={false}
				>
					<Text
						size={1}
						muted
					>
						{prefix}
					</Text>
				</Flex>
				<Box flex={1}>
					<TextInput
						{...elementProps}
						onChange={handleChange}
						value={value}
					/>
				</Box>
			</Flex>
		</Stack>
	);
}

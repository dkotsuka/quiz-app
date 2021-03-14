import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Category, questionService} from '../../services/QuestionService';
import { ScreenNames } from '..';
import { Button, PageContainer, Typography, Separator, LayoutContainer } from '../../components';

export const MainScreen: React.FC = (props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categories: Category[] = await questionService.getCategories();
    setCategories(categories);
  };

  const navigateToCategory = ({id, name}: Category) => {
      navigation.navigate(ScreenNames.QUESTION_SCREEN, {id, name})
  }

  return (
    <>
      <PageContainer padding={24}>
        <Typography.H1>Categories</Typography.H1>
        <Separator height={40} />
        {categories.map(({id, name}) => (
          <LayoutContainer.Column key={`${name}${id}`}>
            <Button.Secondary
              text={name}
              onPress={() => navigateToCategory({id, name})}
            />
            <Separator height={16} />
          </LayoutContainer.Column>
        ))}
        <SafeAreaView />
      </PageContainer>
    </>
  );
};

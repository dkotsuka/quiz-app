import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import { ScreenNames } from '..';
import {CategoryButton} from '../../components/CategoryButton';
import {Typography} from '../../components/Typography';
import {PageContainer} from '../../components/PageContainer';
import {Separator} from '../../components/Separator';
import {Category, questionService} from '../../services/QuestionService';

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
          <>
            <CategoryButton
              text={name}
              onPress={() => navigateToCategory({id, name})}
              key={`${name}${id}`}
            />
            <Separator height={16} />
          </>
        ))}
        <SafeAreaView />
      </PageContainer>
    </>
  );
};

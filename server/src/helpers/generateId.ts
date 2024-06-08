const findLastId = async (
  model: any,
  prefix: string,
  yearMonth: string
): Promise<string | undefined> => {
  const lastDoc = await model
    .findOne({ id: new RegExp(`^${prefix}-${yearMonth}-`) }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastDoc?.id ? lastDoc.id.split('-')[2] : undefined;
};

export const generateId = async (
  model: any,
  prefix: string
): Promise<string> => {
  const currentDate = new Date();
  const yearMonth = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;
  const currentId = await findLastId(model, prefix, yearMonth);
  const parsedId = currentId ? parseInt(currentId) : 0;
  const incrementedId = (parsedId + 1).toString().padStart(5, '0');
  const newId = `${prefix}-${yearMonth}-${incrementedId}`;
  return newId;
};

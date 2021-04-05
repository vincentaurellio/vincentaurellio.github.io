{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import matplotlib.pyplot as plt"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Unnamed: 0</th>\n",
       "      <th>Rk</th>\n",
       "      <th>PLAYER</th>\n",
       "      <th>POSITION</th>\n",
       "      <th>AGE</th>\n",
       "      <th>MP</th>\n",
       "      <th>FG</th>\n",
       "      <th>FGA</th>\n",
       "      <th>FG%</th>\n",
       "      <th>3P</th>\n",
       "      <th>...</th>\n",
       "      <th>DRPM</th>\n",
       "      <th>RPM</th>\n",
       "      <th>WINS_RPM</th>\n",
       "      <th>PIE</th>\n",
       "      <th>PACE</th>\n",
       "      <th>W</th>\n",
       "      <th>SALARY_MILLIONS</th>\n",
       "      <th>PAGEVIEWS</th>\n",
       "      <th>TWITTER_FAVORITE_COUNT</th>\n",
       "      <th>TWITTER_RETWEET_COUNT</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>Russell Westbrook</td>\n",
       "      <td>PG</td>\n",
       "      <td>28</td>\n",
       "      <td>34.6</td>\n",
       "      <td>10.2</td>\n",
       "      <td>24.0</td>\n",
       "      <td>0.425</td>\n",
       "      <td>2.5</td>\n",
       "      <td>...</td>\n",
       "      <td>-0.47</td>\n",
       "      <td>6.27</td>\n",
       "      <td>17.34</td>\n",
       "      <td>23.0</td>\n",
       "      <td>102.31</td>\n",
       "      <td>46</td>\n",
       "      <td>26.50</td>\n",
       "      <td>4279.0</td>\n",
       "      <td>2130.5</td>\n",
       "      <td>559.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>1</td>\n",
       "      <td>2</td>\n",
       "      <td>James Harden</td>\n",
       "      <td>PG</td>\n",
       "      <td>27</td>\n",
       "      <td>36.4</td>\n",
       "      <td>8.3</td>\n",
       "      <td>18.9</td>\n",
       "      <td>0.440</td>\n",
       "      <td>3.2</td>\n",
       "      <td>...</td>\n",
       "      <td>-1.57</td>\n",
       "      <td>4.81</td>\n",
       "      <td>15.54</td>\n",
       "      <td>19.0</td>\n",
       "      <td>102.98</td>\n",
       "      <td>54</td>\n",
       "      <td>26.50</td>\n",
       "      <td>3279.0</td>\n",
       "      <td>969.0</td>\n",
       "      <td>321.5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>2</td>\n",
       "      <td>4</td>\n",
       "      <td>Anthony Davis</td>\n",
       "      <td>C</td>\n",
       "      <td>23</td>\n",
       "      <td>36.1</td>\n",
       "      <td>10.3</td>\n",
       "      <td>20.3</td>\n",
       "      <td>0.505</td>\n",
       "      <td>0.5</td>\n",
       "      <td>...</td>\n",
       "      <td>3.90</td>\n",
       "      <td>4.35</td>\n",
       "      <td>12.81</td>\n",
       "      <td>19.2</td>\n",
       "      <td>100.19</td>\n",
       "      <td>31</td>\n",
       "      <td>22.12</td>\n",
       "      <td>82.5</td>\n",
       "      <td>368.0</td>\n",
       "      <td>104.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>3</td>\n",
       "      <td>6</td>\n",
       "      <td>DeMarcus Cousins</td>\n",
       "      <td>C</td>\n",
       "      <td>26</td>\n",
       "      <td>34.2</td>\n",
       "      <td>9.0</td>\n",
       "      <td>19.9</td>\n",
       "      <td>0.452</td>\n",
       "      <td>1.8</td>\n",
       "      <td>...</td>\n",
       "      <td>0.64</td>\n",
       "      <td>4.20</td>\n",
       "      <td>11.26</td>\n",
       "      <td>17.8</td>\n",
       "      <td>97.11</td>\n",
       "      <td>30</td>\n",
       "      <td>16.96</td>\n",
       "      <td>1625.5</td>\n",
       "      <td>102.0</td>\n",
       "      <td>91.5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>4</td>\n",
       "      <td>7</td>\n",
       "      <td>Damian Lillard</td>\n",
       "      <td>PG</td>\n",
       "      <td>26</td>\n",
       "      <td>35.9</td>\n",
       "      <td>8.8</td>\n",
       "      <td>19.8</td>\n",
       "      <td>0.444</td>\n",
       "      <td>2.9</td>\n",
       "      <td>...</td>\n",
       "      <td>-1.49</td>\n",
       "      <td>3.14</td>\n",
       "      <td>10.72</td>\n",
       "      <td>15.9</td>\n",
       "      <td>99.68</td>\n",
       "      <td>38</td>\n",
       "      <td>24.33</td>\n",
       "      <td>1830.5</td>\n",
       "      <td>186.5</td>\n",
       "      <td>43.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>...</th>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>234</th>\n",
       "      <td>234</td>\n",
       "      <td>455</td>\n",
       "      <td>Nick Collison</td>\n",
       "      <td>PF</td>\n",
       "      <td>36</td>\n",
       "      <td>6.4</td>\n",
       "      <td>0.7</td>\n",
       "      <td>1.2</td>\n",
       "      <td>0.609</td>\n",
       "      <td>0.0</td>\n",
       "      <td>...</td>\n",
       "      <td>1.12</td>\n",
       "      <td>-1.06</td>\n",
       "      <td>0.17</td>\n",
       "      <td>12.0</td>\n",
       "      <td>97.52</td>\n",
       "      <td>10</td>\n",
       "      <td>3.75</td>\n",
       "      <td>283.5</td>\n",
       "      <td>10.0</td>\n",
       "      <td>12.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>235</th>\n",
       "      <td>235</td>\n",
       "      <td>457</td>\n",
       "      <td>Bruno Caboclo</td>\n",
       "      <td>SF</td>\n",
       "      <td>21</td>\n",
       "      <td>4.4</td>\n",
       "      <td>0.7</td>\n",
       "      <td>1.8</td>\n",
       "      <td>0.375</td>\n",
       "      <td>0.2</td>\n",
       "      <td>...</td>\n",
       "      <td>0.11</td>\n",
       "      <td>-1.65</td>\n",
       "      <td>0.04</td>\n",
       "      <td>9.4</td>\n",
       "      <td>95.38</td>\n",
       "      <td>8</td>\n",
       "      <td>1.59</td>\n",
       "      <td>270.5</td>\n",
       "      <td>11.0</td>\n",
       "      <td>8.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>236</th>\n",
       "      <td>236</td>\n",
       "      <td>459</td>\n",
       "      <td>Ryan Kelly</td>\n",
       "      <td>PF</td>\n",
       "      <td>25</td>\n",
       "      <td>6.9</td>\n",
       "      <td>0.5</td>\n",
       "      <td>1.8</td>\n",
       "      <td>0.286</td>\n",
       "      <td>0.3</td>\n",
       "      <td>...</td>\n",
       "      <td>1.45</td>\n",
       "      <td>-0.49</td>\n",
       "      <td>0.08</td>\n",
       "      <td>7.3</td>\n",
       "      <td>96.26</td>\n",
       "      <td>6</td>\n",
       "      <td>1.58</td>\n",
       "      <td>23.0</td>\n",
       "      <td>17.0</td>\n",
       "      <td>10.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>237</th>\n",
       "      <td>237</td>\n",
       "      <td>460</td>\n",
       "      <td>Jordan Mickey</td>\n",
       "      <td>PF</td>\n",
       "      <td>22</td>\n",
       "      <td>5.6</td>\n",
       "      <td>0.6</td>\n",
       "      <td>1.4</td>\n",
       "      <td>0.441</td>\n",
       "      <td>0.0</td>\n",
       "      <td>...</td>\n",
       "      <td>-0.15</td>\n",
       "      <td>-2.77</td>\n",
       "      <td>0.03</td>\n",
       "      <td>6.0</td>\n",
       "      <td>97.66</td>\n",
       "      <td>9</td>\n",
       "      <td>1.47</td>\n",
       "      <td>129.5</td>\n",
       "      <td>0.0</td>\n",
       "      <td>3.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>238</th>\n",
       "      <td>238</td>\n",
       "      <td>475</td>\n",
       "      <td>Alonzo Gee</td>\n",
       "      <td>SF</td>\n",
       "      <td>29</td>\n",
       "      <td>6.8</td>\n",
       "      <td>0.2</td>\n",
       "      <td>1.1</td>\n",
       "      <td>0.214</td>\n",
       "      <td>0.0</td>\n",
       "      <td>...</td>\n",
       "      <td>0.43</td>\n",
       "      <td>-1.68</td>\n",
       "      <td>0.08</td>\n",
       "      <td>0.8</td>\n",
       "      <td>104.33</td>\n",
       "      <td>4</td>\n",
       "      <td>0.06</td>\n",
       "      <td>109.0</td>\n",
       "      <td>NaN</td>\n",
       "      <td>NaN</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>239 rows × 42 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "     Unnamed: 0   Rk             PLAYER POSITION  AGE    MP    FG   FGA  \\\n",
       "0             0    1  Russell Westbrook       PG   28  34.6  10.2  24.0   \n",
       "1             1    2       James Harden       PG   27  36.4   8.3  18.9   \n",
       "2             2    4      Anthony Davis        C   23  36.1  10.3  20.3   \n",
       "3             3    6   DeMarcus Cousins        C   26  34.2   9.0  19.9   \n",
       "4             4    7     Damian Lillard       PG   26  35.9   8.8  19.8   \n",
       "..          ...  ...                ...      ...  ...   ...   ...   ...   \n",
       "234         234  455      Nick Collison       PF   36   6.4   0.7   1.2   \n",
       "235         235  457      Bruno Caboclo       SF   21   4.4   0.7   1.8   \n",
       "236         236  459         Ryan Kelly       PF   25   6.9   0.5   1.8   \n",
       "237         237  460      Jordan Mickey       PF   22   5.6   0.6   1.4   \n",
       "238         238  475         Alonzo Gee       SF   29   6.8   0.2   1.1   \n",
       "\n",
       "       FG%   3P  ...  DRPM   RPM  WINS_RPM   PIE    PACE   W  SALARY_MILLIONS  \\\n",
       "0    0.425  2.5  ... -0.47  6.27     17.34  23.0  102.31  46            26.50   \n",
       "1    0.440  3.2  ... -1.57  4.81     15.54  19.0  102.98  54            26.50   \n",
       "2    0.505  0.5  ...  3.90  4.35     12.81  19.2  100.19  31            22.12   \n",
       "3    0.452  1.8  ...  0.64  4.20     11.26  17.8   97.11  30            16.96   \n",
       "4    0.444  2.9  ... -1.49  3.14     10.72  15.9   99.68  38            24.33   \n",
       "..     ...  ...  ...   ...   ...       ...   ...     ...  ..              ...   \n",
       "234  0.609  0.0  ...  1.12 -1.06      0.17  12.0   97.52  10             3.75   \n",
       "235  0.375  0.2  ...  0.11 -1.65      0.04   9.4   95.38   8             1.59   \n",
       "236  0.286  0.3  ...  1.45 -0.49      0.08   7.3   96.26   6             1.58   \n",
       "237  0.441  0.0  ... -0.15 -2.77      0.03   6.0   97.66   9             1.47   \n",
       "238  0.214  0.0  ...  0.43 -1.68      0.08   0.8  104.33   4             0.06   \n",
       "\n",
       "     PAGEVIEWS  TWITTER_FAVORITE_COUNT  TWITTER_RETWEET_COUNT  \n",
       "0       4279.0                  2130.5                  559.0  \n",
       "1       3279.0                   969.0                  321.5  \n",
       "2         82.5                   368.0                  104.0  \n",
       "3       1625.5                   102.0                   91.5  \n",
       "4       1830.5                   186.5                   43.0  \n",
       "..         ...                     ...                    ...  \n",
       "234      283.5                    10.0                   12.0  \n",
       "235      270.5                    11.0                    8.0  \n",
       "236       23.0                    17.0                   10.0  \n",
       "237      129.5                     0.0                    3.0  \n",
       "238      109.0                     NaN                    NaN  \n",
       "\n",
       "[239 rows x 42 columns]"
      ]
     },
     "execution_count": 2,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df_players = pd.read_csv(\"nba_2017_players_with_salary_wiki_twitter.csv\")\n",
    "df_players"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {},
   "outputs": [],
   "source": [
    "df_players = df_players.sort_values(by=\"SALARY_MILLIONS\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[<matplotlib.lines.Line2D at 0x6b68def8e0>]"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "plt.plot(df_players[[\"SALARY_MILLIONS\"]], df_players[[\"TWITTER_FAVORITE_COUNT\"]])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[<matplotlib.lines.Line2D at 0x6b68e96640>]"
      ]
     },
     "execution_count": 5,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "plt.plot(df_players[[\"SALARY_MILLIONS\"]], df_players[[\"TWITTER_RETWEET_COUNT\"]])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "\"\\nBased on the graphs, it is recommended to increase players salary to be twitter famous.\\nDespite some very high 'spikes' on the middle of the graph, as x is increasing, y is also increasing, generally.\\nIn other words, the line tends to go 'upward' as the salary goes higher.\\n\""
      ]
     },
     "execution_count": 6,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "'''\n",
    "Based on the graphs, it is recommended to increase players salary to be twitter famous.\n",
    "Despite some very high 'spikes' on the middle of the graph, as x is increasing, y is also increasing, generally.\n",
    "In other words, the line tends to go 'upward' as the salary goes higher.\n",
    "'''"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "'\\nFrom the data at https://www.kaggle.com/noahgift/social-power-nba, it cannot be concluded whether choosing the tallest\\npeople will make the twitter count higher. There is no specific data that tells how tall is the player.\\n'"
      ]
     },
     "execution_count": 7,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "'''\n",
    "From the data at https://www.kaggle.com/noahgift/social-power-nba, it cannot be concluded whether choosing the tallest\n",
    "people will make the twitter count higher. There is no specific data that tells how tall is the player.\n",
    "'''"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 8,
   "metadata": {},
   "outputs": [],
   "source": [
    "df_players = df_players.sort_values(by=\"W\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 9,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[<matplotlib.lines.Line2D at 0x6b68ef5cd0>]"
      ]
     },
     "execution_count": 9,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "iVBORw0KGgoAAAANSUhEUgAAAYQAAAD4CAYAAADsKpHdAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADh0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uMy4yLjIsIGh0dHA6Ly9tYXRwbG90bGliLm9yZy+WH4yJAAAgAElEQVR4nO3deZycVZX/8c+pqq7qpDsdsnQWEiABIhiigMSwiIqAEkYUXPgZN6KDg8OgMo4zCo78cBwyOj8dd2BkAEFFMMNiouxGlC0QEgKEELKQkKSzdsjWWbprO78/6qmi0qleknR1V/Xzfb9e/aqqW89TdRs6dercc+99zN0RERGJ9HUHRESkMiggiIgIoIAgIiIBBQQREQEUEEREJBDr6w4crOHDh/u4ceP6uhsiIlVlwYIFW9y9sdRzVRsQxo0bx/z58/u6GyIiVcXMVnf0nIaMREQEUEAQEZGAAoKIiAAKCCIiElBAEBERQAFBREQCCggiIgIoIIiIVKyFa7bx8rodvfZ+CggiIhXq3//4Ct9/eGmvvV/VrlQWEenv9qayxKKZXnu/LjMEM7vVzDab2ctFbd83s1fN7CUzu8/MDit67mozW2FmS83svKL2U8xsUfDcT83MgvaEmf0uaH/WzMb17K8oIlKdUpksqUy2196vO0NGtwFT27U9Ckxy97cDy4CrAcxsIjANOCE45wYziwbn3AhcBkwIfvKveSmwzd2PBX4E/OfB/jIiIv1JKpMlma6ggODujwNb27U94u7p4OEzwNjg/oXAXe7e5u6rgBXAFDMbDTS4+1zPXcT5V8BFRefcHty/Gzgnnz2IiIRZKl15GUJX/hZ4MLg/Blhb9FxT0DYmuN++fZ9zgiCzAxhW6o3M7DIzm29m85ubm3ug6yIilSuZ8crKEDpjZv8KpIE78k0lDvNO2js7Z/9G95vcfbK7T25sLLmdt4hIv5FMZ0hlSn4clsVBBwQzmw5cAHw6GAaC3Df/I4oOGwusD9rHlmjf5xwziwGDaTdEJSISRqmM01bpGYKZTQW+AXzY3fcUPTUbmBbMHBpPrng8z903AC1mdlpQH7gEmFV0zvTg/seBPxcFGBGR0OrtWUZdrkMwszuBs4DhZtYEXEtuVlECeDSo/z7j7n/v7ovNbCbwCrmhpCvcPT+J9nJyM5YGkKs55OsOtwC/NrMV5DKDaT3zq4mIVK9s1klne7eG0GVAcPdPlmi+pZPjZwAzSrTPByaVaG8FLu6qHyIiYZLK5gJBtc0yEhGRHpbPDNJZJ5vtnVF0BQQRkQpUPLso2UtZggKCiEgFKh4qUkAQEQmx4mJyqpcKywoIIiIVSBmCiIgA+waBVFpFZRGR0CoOAslM71wTQQFBRKQCFWcISWUIIiLhpRqCiIgA7WYZKSCIiITXPhmCpp2KiISXhoxERATIXS2tcF8ZgohIeKVUQxAREWg/7VQBQUQktIqzAmUIIiIhVpwVKEMQEQmxfa+HoJXKIiKhpXUIIiICaKWyiIgEUpkstTURItZ7GUKsV95FREQOSDKTpSYawb33MgQFBBGRCpTKZIlHc4M4bZVSQzCzW81ss5m9XNQ21MweNbPlwe2QoueuNrMVZrbUzM4raj/FzBYFz/3UzCxoT5jZ74L2Z81sXM/+iiIi1SeVdmqiEeLRSEXVEG4DprZruwqY4+4TgDnBY8xsIjANOCE45wYziwbn3AhcBkwIfvKveSmwzd2PBX4E/OfB/jIiIv1FMpMlHosQj0UqZ5aRuz8ObG3XfCFwe3D/duCiova73L3N3VcBK4ApZjYaaHD3ue7uwK/anZN/rbuBc/LZg4hIWOVqCEZNhWUIpYx09w0Awe2IoH0MsLbouKagbUxwv337Pue4exrYAQwr9aZmdpmZzTez+c3NzQfZdRGRypdK54rK8Vikare/LvXN3jtp7+yc/Rvdb3L3ye4+ubGx8SC7KCJS+VLBkFFNNFLx11TeFAwDEdxuDtqbgCOKjhsLrA/ax5Zo3+ccM4sBg9l/iEpEJFTy006rIUOYDUwP7k8HZhW1TwtmDo0nVzyeFwwrtZjZaUF94JJ25+Rf6+PAn4M6g4hIaKXSTjwaIR61fa6NUE5drkMwszuBs4DhZtYEXAt8D5hpZpcCa4CLAdx9sZnNBF4B0sAV7p4JXupycjOWBgAPBj8AtwC/NrMV5DKDaT3ym4mIVLFkJktDvIZIFlpTFRIQ3P2THTx1TgfHzwBmlGifD0wq0d5KEFBERCQntzDNSFuEltZ0r7ynViqLiFSgVFBDiJhrLyMRkTBLBtNOIxHvtaKyAoKISAVKZZx4LEI269rcTkQkzPLTTrMaMhIRCbd8UTkbsX0up1lOCggiIhUov3VF1nWBHBGRUMvvdpp1VFQWEQkrdyeV8eCKabkagrtT7o2gdU1lEZEKk68Z5K+HAJDOlr+OoIAgIlJh8tNM89dDgN6pI2jISESkwuQ//PPBAOiVtQgKCCIiFSb/4R+PRcjv/awMQUQkhJKZ/TOE3phppIAgIlJhCkXl4oCgDEFEJHxSRRlCfqZpb6xWVkAQEakwbxaVrbD2QBmCiEgIJYuKyoWAoBqCiEj45K+hHI9GIBgyUoYgIhJC+XpBTSySjwdahyAiEkbFReWIMgQRkfBqKyoqR4IagjIEEZEQyn/4J1RUFhEJt32HjHpv2ukh7XZqZl81s8Vm9rKZ3WlmtWY21MweNbPlwe2QouOvNrMVZrbUzM4raj/FzBYFz/3Uyr3pt4hIBSsOCPntr3sjQzjogGBmY4CvAJPdfRIQBaYBVwFz3H0CMCd4jJlNDJ4/AZgK3GBm0eDlbgQuAyYEP1MPtl8iItUumZ9lFI0U9jNKVXqGQG7IaYCZxYCBwHrgQuD24PnbgYuC+xcCd7l7m7uvAlYAU8xsNNDg7nPd3YFfFZ0jIhI6+eGh4gvkVHSG4O7rgB8Aa4ANwA53fwQY6e4bgmM2ACOCU8YAa4teoiloGxPcb9++HzO7zMzmm9n85ubmg+26iEhFK2x/HY1QE83PMqrgK6YFtYELgfHA4UCdmX2ms1NKtHkn7fs3ut/k7pPdfXJjY+OBdllEpCqkiqad5nc8bavwIaNzgVXu3uzuKeBe4AxgUzAMRHC7OTi+CTii6Pyx5IaYmoL77dtFREIplcliBtFIbnO7mqj1yjqEQwkIa4DTzGxgMCvoHGAJMBuYHhwzHZgV3J8NTDOzhJmNJ1c8nhcMK7WY2WnB61xSdI6ISOi0ZbLB1te5AZR4NFLZK5Xd/Vkzuxt4HkgDC4GbgHpgppldSi5oXBwcv9jMZgKvBMdf4e6Z4OUuB24DBgAPBj8iIqGUSjuJoovj1MQilb9S2d2vBa5t19xGLlsodfwMYEaJ9vnApEPpi4hIf5HKZKmJvRkQeitDONRppyIi0sNSmWxhdhHk1iNU9LRTEREpj2RQQ8hLxJQhiIiEUjKdLUw3hVyGUOmzjEREpAxSmWxhhTLkViwrQxARCaFUxvcZMsqtQ6jglcoiIlIe7YvKyhBEREIqmc62yxA0y0hEJJSS7WoIiV5amKaAICJSYVKZ/WcZachIRCSEUul9i8pxZQgiIuHUfusKZQhyUPYk06zYvIu9yUzXB4tIRUqWmmWkaadyoJ5fvZ1zf/hXXl6/o6+7IiIHKZnOkthvc7vyf8lTQBARqTCpdnsZ5WoIyhBEREKn1EplrUMQEQmh9rudxqNRMlknky1vlqCAICJSQdw92O206HoIsdz9ck89VUAQEakg6SALiLcrKgNlHzZSQBARqSD5LKB9URko+1oEBQQRkQqSSucyhH1rCLn7GjISEQmR/LBQ+5XKoAxBRCRU8gEh3m6lMihDEBEJlVSQBcRLZAhtlZwhmNlhZna3mb1qZkvM7HQzG2pmj5rZ8uB2SNHxV5vZCjNbambnFbWfYmaLgud+amZW+h1FRPq3UkXlRCFDqOx1CD8BHnL344ETgSXAVcAcd58AzAkeY2YTgWnACcBU4AYziwavcyNwGTAh+Jl6iP0SEalKyRIBoeJrCGbWALwHuAXA3ZPuvh24ELg9OOx24KLg/oXAXe7e5u6rgBXAFDMbDTS4+1x3d+BXReeIiIRKPguIt9u6IvdchQYE4GigGfilmS00s5vNrA4Y6e4bAILbEcHxY4C1Rec3BW1jgvvt2/djZpeZ2Xwzm9/c3HwIXRcRqUz5LKDa1iHEgHcAN7r7ycBuguGhDpSqC3gn7fs3ut/k7pPdfXJjY+OB9ldEpOLls4BSReVKXqncBDS5+7PB47vJBYhNwTAQwe3mouOPKDp/LLA+aB9bol1EJHTerCG8+V05UekZgrtvBNaa2XFB0znAK8BsYHrQNh2YFdyfDUwzs4SZjSdXPJ4XDCu1mNlpweyiS4rOEREJlVSJIaOaXlqpHDvE878M3GFmcWAl8HlyQWammV0KrAEuBnD3xWY2k1zQSANXuHv+EkCXA7cBA4AHgx8RkdApFJVjvV9DOKSA4O4vAJNLPHVOB8fPAGaUaJ8PTDqUvoiI9AfJTO57crwPMgStVBYRqSCFze1KZAgVvVJZRKQcVmzexYXXP8XO1lRfd6XXlSoqv7nbaWWvVBYR6XFLN7bw4trtvL5ld193pdcVpp1W2ToEEZGy2tWa7usu9LpSC9OiESNiqiGISIi1tIUvIJRamJZ/XMkL00REyiqUGUJQJ4hF9t3EoSYa0ZCRiITXrpBmCPFohPZXAUgoQxCRMAtlQEhn95lhlFcTjRRWMZeLAoKIVKwwBoRkJrvPGoQ81RBEJNTCWEPIDxm1VxONaJaRiIRXKDOEtO8z5TQvrqKyiIRZS1gzhBJDRjWxSGEGUrkoIIhIxdodwgwhlSldVE5EIyTTmRJn9BwFBBGpWOEcMsqWHDKqiZn2MhKR8AplQOhgyCiuorKIhFlYawglMwQVlUUkzHa1hW/761TGS0471ToEEQm11lSWdJk/BCtNsoOVypp2KiKht7utvDNrKk1H007jMdUQRCTkWkI2bJRUDUFEpLSwzTTqaOuKXIagaaciEmJh288o1cHWFcoQRCT0wnbVtNxupyWKysEsI/fyZQmHHBDMLGpmC83sj8HjoWb2qJktD26HFB17tZmtMLOlZnZeUfspZrYoeO6n1v7KECISWmHbviKVzhKPRvdrjwczj8o5bNQTGcKVwJKix1cBc9x9AjAneIyZTQSmAScAU4EbzCz/W98IXAZMCH6m9kC/RKQfCNuQUWcZAlDWmUaHFBDMbCzwQeDmouYLgduD+7cDFxW13+Xube6+ClgBTDGz0UCDu8/1XC70q6JzRCTkVFTOydcVyllHONQM4cfA14HiHo509w0Awe2IoH0MsLbouKagbUxwv327iEiotq/IZJ2sU/p6CJWcIZjZBcBmd1/Q3VNKtHkn7aXe8zIzm29m85ubm7v5tiJSzcKUIeS//Xc0ywigrUIzhHcBHzaz14G7gLPN7DfApmAYiOB2c3B8E3BE0fljgfVB+9gS7ftx95vcfbK7T25sbDyErotItQhTUTm/V1GplcqJSs4Q3P1qdx/r7uPIFYv/7O6fAWYD04PDpgOzgvuzgWlmljCz8eSKx/OCYaUWMzstmF10SdE5IhJyYZp2mv+wj5fYy6hQQyhjQIiV4TW/B8w0s0uBNcDFAO6+2MxmAq8AaeAKd89vUnI5cBswAHgw+BGRkBtQEw3VLKN8QOjomsqQW7hWLj0SENz9L8BfgvtvAOd0cNwMYEaJ9vnApJ7oi4j0H/W1sVDVEPIf9qWvmJbPEMq32Z9WKotIxapPxEKVIeQ/7Gs6uGIaQLKMGYICgohUrPpEuDKE/Id96c3tcnWFctYQFBBEpGKFLSAUisolVirXFGoICggiEkL5GkI5N3SrJJ0WlWPln2WkgCAiFWtQIkYm67SmwnEZze4sTKvIdQgiIuVWl8hNhAzLVdM6W5gWr/CVyiIiZVVfmwsIYbmucn5r646umJY7RgFBREKoPsgQwjL1tDsL0yp5t1MRkbIZVBuuIaM3A0KJWUbKEEQkzMKWIbR1UlRWhiAioZYvKodlLUL+23+iRFE5nzUkK/wSmiIiZTEokS8qhyQgdJIhmBnxaEQZgoiEU32hhhCSgBB8+y+1lxHksgTVEEQklBKxKLGIhaaGkOykqAy5qafKEEQklMwObAtsd+elpu1l7lX5FFYqRzrKECLKEEQkvOri3d8C++nX3uDDP3+KZZtaytyr8khlstREjUhEGYKIyH4GHUCGsGrLbqB6i9C5gNDxx3I8GtHmdiISXgeyBfamna1l7k15pTLeeUBQhiAiYXYgNYQNO6o7ICS7yBBUQxCRUDuQy2hurPaAkM6WXJSWF49pyEhEQqw+Eev2OoSNVT9klO1wyikE6xB0TWURCaswZQhdFpVjUdqUIYhIWNXXxtibypDJdv7NuKU1VfV7HiXTXRSVo6ZrKotI5WlLZ2hNlf/CNfXd3OCu2mcYQVBU7qKGUJFFZTM7wsweM7MlZrbYzK4M2oea2aNmtjy4HVJ0ztVmtsLMlprZeUXtp5jZouC5n5pZx4NoIlIRjvvWQxx/zUNlf5/8NRG6CgjVPsMIcpvbJbqYZVSpReU08DV3fytwGnCFmU0ErgLmuPsEYE7wmOC5acAJwFTgBjOLBq91I3AZMCH4mXoI/RKRfqQ+UQN0fU2EfhEQMllqYh1/H45HI5U5ZOTuG9z9+eB+C7AEGANcCNweHHY7cFFw/0LgLndvc/dVwApgipmNBhrcfa67O/CronNEJOTqErnvjbu6uGrapv4SEDrLEKph2qmZjQNOBp4FRrr7BsgFDWBEcNgYYG3RaU1B25jgfvv2Uu9zmZnNN7P5zc3NPdF1Ealwbw4ZdV6v2NAvaghdFZUrfKWymdUD9wD/6O47Ozu0RJt30r5/o/tN7j7Z3Sc3NjYeeGelX5r94nrGXXU/e5LVPcNESuvukFG1TzkFSKYzhUtlllLRC9PMrIZcMLjD3e8NmjcFw0AEt5uD9ibgiKLTxwLrg/axJdpFuuWWJ1YCsGzTrj7uiZRDfSFD6HzIaOOO1k4XdVWDVMaJdzbLKBopXESnHA5llpEBtwBL3P2HRU/NBqYH96cDs4rap5lZwszGkysezwuGlVrM7LTgNS8pOkdEQi4/7bSlqwxhZysjBtX2RpfKpuuVyhEyWe9yTcbBOpQM4V3AZ4GzzeyF4OdvgO8B7zez5cD7g8e4+2JgJvAK8BBwhbvnBwUvB24mV2h+DXjwEPolIv1IXTxfVO44ILSmMmzdnWT04P4QEDofMsofVw6xgz3R3Z+k9Pg/wDkdnDMDmFGifT4w6WD7IiL9VywaYUBNtNNrHGze2QbAqCoPCMl0V7ud5j5y29JZamuiHR53sLRSWSrGv/1hMeOuup+9yfKvfpWe5+6c/J1HmLdqa4+/dldbYG/YsReAUQ1VHhAy2U5rCIkyZwgKCFIxHn55IwBb9yT7uCdyMNZt38u2PSn+aeYLPf7agxKxTmsI+V1Oqz1DSGW801lG+eyhXFNPFRBEpEe473vbk7rKEPJTTqs5IOSLxX1ZQ1BAEJGKVxfvfAvsDTtaGZSIUZc46LJon8t/yHe2dYUyBBEJve5kCNWcHcCbAaGrhWlA2RanKSCISMUblOgiIOys/oCQ/9bf1cK04mN7mgKCVLR/vGsh//K/L/Z1N6SPdStDqPIZRvkVyN2rIVTewjSRsvv9C+v53wVNXR8o/Vr+MppeomKdzmTZ3NLaLxalQecBQTUEEQm9ukSMdNZpK/FB2LyrjazDyCoPCMlCQOjkegiaZSQiYdfZVdPyU06LM4Tybf9WPoUaQjdXKpeDAkI/lS7jjogiva1wXeUSU08LaxAaBhSCwrWzFtO0bU/vdbAHFGYZdaOorAxBumXCyHoA5r/e89sHSGW74S8ruPf5A6+3bN+TZGdr51tLd0f+Sujl+PZaCAglMoQNRYvSjh/VwP9cMpnXt+zmQz97kieWV8+FtLpTQyhMO1WGIN0xsqGWdxx5GA8G20BIeNyzoIn/99DSA94a+aTvPMrbv/3IIb//oOBCNlt2tR3ya7WXvyZCqe0rNu1sJR6LMGRg7v3fP3Eks798JiMG1XLJrfO4/rEVZMu0XXRPSqa7nmVUowxBDtT5k0bzyoadrHmjulLm3rarLc01v3+5r7vRozbubOXZVW/0zZsX1ULXbd/boy/dVYYwqqEWszc7MH54HfddcQYfevvhfP/hpXzxNwt6JAsqpzeHjDouKg+oiXJMY13ZVmQrIPRDUyeNAuChxRv6uCeV7Vv3LeLXz6xm7mt99AFaJrMW9v0FB//wYs/2IR8QSm2B3dEq5YHxGD+ZdhL/94KJPPbqZi78+VMs3djSo/3qSflhoM4yhCF1ceZ87Sw+dOLhZemDAkI/dMTQgUwa06Bhoy7kv212tuCpGj2waAOtqb7dQnzWCz0cEPJDRqUCws6O1yCYGX975nh++3en0dKa5qLrn+rxYNWVbbuTTL91Hjf8ZUWnx3WnqFxuCgj91NQTRrFwzfbCPvESDsPq4rS0pXns1c1dH1wmRw4dyJINO1m2qee+jefrE+1nGbl7t1YpTxk/lPu/ciYTD2/gy3cu5N//+ErZxuGLrd26h4/d+DR/XdbMS2t3dHpsshtF5XJTQOinpk4aDcAjizf1cU/Kr9z1wnFX3c9Hb3iqvG/SQ6aMH0rjoAT3LVzXZ3344NtHEzGY3YNZQm1NhGjE2NW2bx1g6+4kyUy2W/sYjWyo5c6/O43PnTGOW55cxadvfpbmlp4vgOctatrBR254mjd2JzksKHh3Jr8dRWfrEMpNAaGfOnZEPRNG1PPgy/27jtCWzrBoXe6b15Bu/KM7WM+v2V621+5JkYjx4RMP5y9Lm9neRxcaGl6f4F3HDmfWi+tKbjVxMMyMunh0vwwhf2Gc7m5bEY9F+PaHT+BHnziRl5q2c8HPnmDB6m090sdijy3dzCdumksiFuGey09n5KCu+9edaaflpoDQj50/aRTzVm3ljW5MA3R3vj17MeleSKN70g8fWVa4n4j1/DVmq9FFJ40hmcnywKK+qyFdeNIY1m7dy8K1XQdSd+dbv1/U5ZqBQbU17GrbtzaSX5Q28gA3tvvIyWO59/J3kYhFmXbTXH499/UeC14zn1vLF26fn5vp9A9ncOyIQd06782icsezjMpNAaEfO2/SKLIOj7zS9bDR3QuauO3p1/nZnzsvfHVHKpNlc/DNrTOdXTS9O55Z+QY3PbHykF6jP5o0poGjG+v4/Qt9N2x03gkjicci3Ro2yjr85pk1XP6b53mteVeHx9UnYvsNGW0obFsx4ID7OPHwBv7wpTN594RGrpm1mK/NfPGQruft7vz4T8v4+j0vccYxw/jdF09nRDcDVSbrhd9dRWUpi4mjGzhy6EAe6sZso51BKn6oc7W37GrjE7+Yy/t+8JdOFwNt35Pk5O88yjfvW3TAC6kg18+vzXyRo4YO5FsffGuXx6cyWcZddT9X3PH8Ab9XT1mweivjrrqfBasPfRX582u28c37FpV8zsz4yEljmLdqa4+vB+iuQbU1nPvWEfzxpfXdzjp3taX54q8XdDjrq9QW2Jt2thIxGF4fP6h+Dh5Yw82XTOar576F+15Yx0dvfPqg1u+kM1muvncRP/7Tcj72jrHc+rl3FqbKdiabdR5ctIGpP36cX81dzelHD6Mu3ndXfVNA6MfMjPMnjeLp17awY2/5F+Us39TCRdc/xfNrtrM7mel0g7GW1jTJTJbfPruGL9/5PG3pA/tm9u1Zi9m4s5UffuKkbi3SyU/D/OuyzoclVmxu4eHFG3tkZet1f3yFHzy8tPCt8/FlW/a57cjK5l1s2/3m+P/O1hSfuflZvvvgEpYHM3c+esPT/PbZNby4dnvJoY4LTxoDwKw+zBI+fOIYtuxK8nQ313mceexwVm3ZzT/PfBEv8dezYPU2nlrxxj7bsmzY0cqIQbXEDmHcPRIxrjx3ArdOfyfrtu3hgp89cUCztHa3pfm7X83nrufW8uWzj+UHF7+9yzqAu/PnVzfxoZ8/yeV3PE/Wnes/9Q7u+MKpRCJ9N2RUMRcgNbOpwE+AKHCzu3+vj7u0j007W1m1ZTeTjxpySH98vW3qpFH84vGVzFmyiY++Y2zZ3ueJ5c38w2+eJ1ET5QMTR3ZrmApgyrihPLBoI9v3PNfpeoA9yTQDg29O97+0gXsXruPKcybwjiOH9Nhio52tKc7/yROkMs6kMQ1c88GJnHr0sG6d++tnVnPHM6u54wunMrQujpkxc/5adrammfXiOq676G3d7sfZ//VXAF7/3gdzt1t28+SKLTy5Ygu/+OtKThw7uHDshdc/xVtHN/CpKUfss63DkcMGcspRQ/j9wnVc/t5j9lnFC7npkA+9vLHbkw7+snQzX/3dC1x08hi+8O6jGXNY10M0Zx3XyKDaGLNeWM973tLY5fFTxg/lrOMaue7+JaztZGO6j//3XD596pF84/zje/TSme87fgR//PK7+eJvFvC3tz/HledM4CtnTyASMdydnXvTNO9qZXNLG83Bz+aWNh5f1syyTS3M+MgkPn3qUV2+z1MrtvCDR5aycM12jhw6kB/+nxO58KQxRPswEORVREAwsyhwPfB+oAl4zsxmu/srPf1emayTdScWscI/kvw3rPb/aIrNfmE9Mx5YwuABNZx9/AjOfetI3vOW4QyqrSGbdbbtSRb+UI4dUc/gATUkYpGSwePKuxayZMNOHvnqew/qd2hLZ3hjV5I3diXZsquNUYNreevoBtrSGXbsTbFjT4qxQwYyIB7lxLGHMXpwLfctXMcHThiFe+6714LV2zhu5CAOb/cP+/nV23ipKfeH2prKsmjdDs4+fgS7k2l2taY543t/5vSjh3Hr595JIhjrPPqbDwBw/KhB3PK5d3LPgqb9AoK7l/zve/HksXzinUfw9XteKgwdvbGrjeH18X2KxJOv+xPvnziS8yeN4hv3vMSJRxzGl84+FoDXNufGXv/1vkWccexwjmmsY+22vRw2oIbzJ42ipTXN+hLrMfLT/H733Fpue3oVz67cSjrow9ZdST5x0zNMPWFU4Re7SL0AAArySURBVPg/Bb+TGTQMqGHyUUNIZ52tu5OFLTBOue5PDB5QwzGNdexsTTNkYA010QjTb51XeJ03drexJ5mmNhbluw8u4X+eWFX48C+WzTotrWleD4Yw/vNjb6OlNc3dRRcM+veLJnHXvDVcM2sxkAuW138q99xFJx3ONbMWc+3sxRw/qoHxw+tYtqmFa2cvLpw/cXRD4f70W+fxznFDOOWoobn/ZziHDYhz2MAaXt3YwrY9KW57+nV+PXc1F508Zr/+tldbE+X8SaN4YNFGZqQmUVuT+/9538Im7nx2LW3pDG3pLHtT+Qyqmf/9+9N5qWkHs0ssHnvi6+9j485WHnp5I798ahV/WrKJVMaZMm5ol33priOHDeTey8/gX+/LDf/MemE9yXSW5l1tJTeUi8cijDlsADd9djLnThzZ6Wuv2bqHT970DHNXvsHowbV896Nv4+OnjO3TWUXtWU9V1g+pE2anA9929/OCx1cDuPt3Ozpn8uTJPn/+/AN+r1/89TW+++Cr1CdimOV2Zizehzwei7AnmSbr8B8feRufOvVIIDe++cSyZh5dsonHXt3Mtj0paqLG8PoEzS1thQ+SzjTUxmhLZwu7QQ6vT1ATNWqiEWJRI51xWlOZ3E86SzqTJR6LkIhFqa2JsGlnGwNqooV/QMXat99z+emFf9jjrrq/wz7lA9fmHpiPvejbH2BQbQ0/m7Oc/3p0GYMSMVLZLOmMF/77HD64tvAhsCeZ4b8uPpGPnTKWOUs2cent+/7/LP6dPjnlSB5YtKEw9PVvHz6B6WeMA+AjNzzFwgOYFjpkYA272zL7XKj82BH1nPvWkfz3X18DYMl3pnLzEyu58a+vsecACo3XXDCR15p3sbJ5F8+szA1tLL1uKjc89ho/mbO8w/PGD6/LbQVksLJ5NwAR23eNxeVnHcM3ph4PvPn/NB9IFjXt4EM/f3Kfth17UnzxN/NZuGb7fjuQ/st5x3HB20dz1LC6wmu9ZWQ9yzZ1XNQFeOAr72bm/LXc9dwaWlO51xxQEyUei1ATNbbsSnLNBRO59MzxQG7GzdfveYn6RIwRDQlwWLkl9/u99y2NxGMRIgYPL95EPBph2Yzz2ZNMM/H/PgzAPZefwSlHDdmvHy+u3c5V9y5iyYadfP5d47j2Qyd02u8D5e7cOW8tDy3eyLC6OCMGJWgs+hkxqJbGQQkaamOdfpHMO+9Hj7N0UwvD6xNc8b5j+OSUIwsBsreZ2QJ3n1zyuQoJCB8Hprr7F4LHnwVOdfcvtTvuMuAygCOPPPKU1atXH/B7rWzexU2PryQSMRLBh23xlrLJdJZkJvcBcPlZx5ZMjTNZ5/k12/jTK5vYsivJiIYEIwclGNFQy/rte4nHIsEHe5Y1W/dw94ImPjnlCBKxKImaCIvX7aS5pY1Txg0hlc6SzjrJTJaaiFFbE6W2JndcPBohmc4WXqs1nWHn3hSnHDWEYfUJhtXF+e6Dr3LUsIEc21jPYQNrGDyghsED47zrmGEMq08AcNtTq/j2H17hm39zPIZhBtfdvwSAz50xLvdNLZWlLZPlM6cexc7WFGu37uGxpZt5asUbXHnOBAbVxqhPxLjq3kWMOWwAnz39KPYkc8Fr+aYWfnDxiYX3W7VlN7c//TpmuTnVsYjxUtMOhtXHScQihSBXn4jxuTPGMaQuVxB8esUWvnnfIi49czw79qbYvifFzU+uYlhdnAXXvJ9kOssTy5t5YvkWLj1zPEcMHQjAsk0tfP6Xz/HkN97H1t1JXmvezWdveZa2dJavnvsWGgbEaKit4X+eWMkxI+oZVhdnYDzG61t289Dijfzpn97LsSNy24b/4OGlLF6/g19+fgoAm3e2MuU/5vDetzTyzx84DieXEdw5bw0jG2oZVpdgWH2cuSvfYG8yw62fe2fh72Tqjx/ns6cfVRhGWLB6Kx+7cS5fPvtY6hIx9iYz3PzESnYnM3zoxMNz2ZvD/Ys2cExjHedPGs1hA2tI1ES55vcvM/fqswuzaWa9sI7vP7yUJ79xduH9pt86jxPHDuafPnDcPn+v2ayzYWcrq5p3s+qN3QysifKxU0oPH27fk+T5Ndt47vVtTDp8MBGD7cH/i8EDagpfkLbuTvK1mS/QtG0vZx3XGPy7yeKeC1xHDasDoGnbHn7w8NJcNma5/e/MjPcd17jPEObk6x5lxkfexnlBRrZ0Ywvn/fhxll43tcPpxKlMlgcWbeCd44bul+lWmlkvrKO5pY1PnXpkYeizr1RDQLgYOK9dQJji7l/u6JyDzRBERMKss4BQKYNXTcARRY/HAn2/ZaOISIhUSkB4DphgZuPNLA5MA2b3cZ9EREKlImYZuXvazL4EPExu2umt7r64i9NERKQHVURAAHD3B4AH+rofIiJhVSlDRiIi0scUEEREBFBAEBGRgAKCiIgAFbIw7WCYWTPQ3aXKw4HOt5isTNXab1Df+4r63jeqqe9HuXvJ3QarNiAcCDOb39HKvEpWrf0G9b2vqO99o5r7XkxDRiIiAiggiIhIICwB4aa+7sBBqtZ+g/reV9T3vlHNfS8IRQ1BRES6FpYMQUREuqCAICIiQD8PCGY21cyWmtkKM7uqr/vTGTO71cw2m9nLRW1DzexRM1se3O5/LcEKYGZHmNljZrbEzBab2ZVBe0X338xqzWyemb0Y9PvfgvaK7ncxM4ua2UIz+2PwuCr6bmavm9kiM3vBzOYHbdXS98PM7G4zezX4mz+9WvrelX4bEMwsClwPnA9MBD5pZhP7tledug2Y2q7tKmCOu08A5gSPK1Ea+Jq7vxU4Dbgi+G9d6f1vA8529xOBk4CpZnYald/vYlcCS4oeV1Pf3+fuJxXN36+Wvv8EeMjdjwdOJPffv1r63rncdVz73w9wOvBw0eOrgav7ul9d9Hkc8HLR46XA6OD+aGBpX/exm7/HLOD91dR/YCDwPHBqtfSb3JUF5wBnA3+spr8Z4HVgeLu2iu870ACsIpiQU019785Pv80QgDHA2qLHTUFbNRnp7hsAgtsRfdyfLpnZOOBk4FmqoP/BkMsLwGbgUXevin4Hfgx8HcgWtVVL3x14xMwWmNllQVs19P1ooBn4ZTBUd7OZ1VEdfe9Sfw4IVqJNc2zLyMzqgXuAf3T3nX3dn+5w94y7n0Tu2/YUM5vU133qDjO7ANjs7gv6ui8H6V3u/g5yQ7pXmNl7+rpD3RQD3gHc6O4nA7up1uGhEvpzQGgCjih6PBZY30d9OVibzGw0QHC7uY/70yEzqyEXDO5w93uD5qrpv7tvB/5Cro5TDf1+F/BhM3sduAs428x+Q3X0HXdfH9xuBu4DplAdfW8CmoJMEuBucgGiGvrepf4cEJ4DJpjZeDOLA9OA2X3cpwM1G5ge3J9Obmy+4piZAbcAS9z9h0VPVXT/zazRzA4L7g8AzgVepcL7DeDuV7v7WHcfR+5v+8/u/hmqoO9mVmdmg/L3gQ8AL1MFfXf3jcBaMzsuaDoHeIUq6Ht39OuVymb2N+TGWaPAre4+o4+71CEzuxM4i9w2upuAa4HfAzOBI4E1wMXuvrWv+tgRMzsTeAJYxJvj2d8kV0eo2P6b2duB28n9fUSAme7+HTMbRgX3uz0zOwv4Z3e/oBr6bmZHk8sKIDcE81t3n1ENfQcws5OAm4E4sBL4PMHfDxXe967064AgIiLd15+HjERE5AAoIIiICKCAICIiAQUEEREBFBBERCSggCAiIoACgoiIBP4/2rp8indlbY0AAAAASUVORK5CYII=\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "plt.plot(df_players[[\"W\"]], df_players[[\"TWITTER_FAVORITE_COUNT\"]])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 10,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[<matplotlib.lines.Line2D at 0x6b68f4bfd0>]"
      ]
     },
     "execution_count": 10,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "plt.plot(df_players[[\"W\"]], df_players[[\"TWITTER_RETWEET_COUNT\"]])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 11,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "'\\nBased on the graphs, the number of wins slightly increase the twitter favorite and retweet count.\\n'"
      ]
     },
     "execution_count": 11,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "'''\n",
    "Based on the graphs, the number of wins slightly increase the twitter favorite and retweet count.\n",
    "'''"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.3"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
